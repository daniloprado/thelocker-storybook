import { readFileSync, watch, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

type TokenType = 'color' | 'typography' | 'spacing' | 'radius' | 'shadow' | 'z-index' | 'motion';
type TokenTier = 'primitive' | 'semantic';

type TypographyValue = {
  family: string;
  style?: string;
  size: number;
  weight: number;
  lineHeight: number;
  letterSpacing: number;
};

type Variable = {
  name: string;
  type: TokenType;
  tier: TokenTier;
  values: Record<string, string | number | TypographyValue>;
};

type Collection = {
  id: string;
  name: string;
  modes: Array<{ id: string; name: string }>;
  variables: Variable[];
};

type RawExport = {
  meta: {
    fileKey: string;
    sourceFile: string;
    extractedAt: string;
    sourceNodes: string[];
    limitations: string[];
  };
  collections: Collection[];
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const RAW_PATH = resolve(ROOT, 'figma', 'raw-export.json');
const GENERATED_DIR = resolve(ROOT, 'generated');
const CSS_PATH = resolve(GENERATED_DIR, 'tokens.css');
const TS_PATH = resolve(GENERATED_DIR, 'tokens.ts');
const SCHEMA_PATH = resolve(GENERATED_DIR, 'tokens.schema.json');

const cssVarPrefixByType: Record<TokenType, string> = {
  color: 'color',
  typography: 'font',
  spacing: 'space',
  radius: 'radius',
  shadow: 'shadow',
  'z-index': 'z',
  motion: 'motion'
};

function slug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s*[-_]\s*/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function cssVarName(variable: Variable): string {
  const rawName = variable.name;
  const normalizedName =
    variable.type === 'spacing' && rawName.toLowerCase().startsWith('spacing/')
      ? rawName.split('/').slice(1).join('-')
      : variable.type === 'radius' && rawName.toLowerCase().startsWith('radius/')
        ? rawName.split('/').slice(1).join('-')
        : rawName;
  return `--${cssVarPrefixByType[variable.type]}-${slug(normalizedName)}`;
}

function isTypographyObject(value: unknown): value is TypographyValue {
  return typeof value === 'object' && value !== null && 'family' in (value as Record<string, unknown>);
}

function formatTypographyScalar(variable: Variable, value: string | number): string {
  if (typeof value === 'number' && variable.name.toLowerCase().startsWith('size/')) {
    return `${value}px`;
  }
  return String(value);
}

function toCssValue(variable: Variable, value: string | number | TypographyValue, part?: keyof TypographyValue): string {
  if (variable.type === 'spacing' || variable.type === 'radius') {
    return `${value}px`;
  }

  if (variable.type === 'typography') {
    const typography = value as TypographyValue;
    if (part === 'family') return typography.family;
    if (part === 'weight') return String(typography.weight);
    if (part === 'size') return `${typography.size}px`;
    if (part === 'lineHeight') return `${typography.lineHeight}px`;
    if (part === 'letterSpacing') return `${typography.letterSpacing}px`;
    if (part === 'style') return typography.style ?? 'normal';
  }

  return String(value);
}

function buildCss(raw: RawExport): string {
  const lines: string[] = [];
  const firstCollection = raw.collections[0];
  const firstMode = firstCollection?.modes[0]?.id;

  lines.push('/* Auto-generated from src/tokens/figma/raw-export.json */');

  if (firstCollection && firstMode) {
    lines.push(':root {');
    for (const variable of firstCollection.variables) {
      const value = variable.values[firstMode];
      if (value === undefined) continue;

      if (variable.type === 'typography' && isTypographyObject(value)) {
        const base = cssVarName(variable);
        lines.push(`  ${base}-family: ${toCssValue(variable, value, 'family')};`);
        lines.push(`  ${base}-size: ${toCssValue(variable, value, 'size')};`);
        lines.push(`  ${base}-weight: ${toCssValue(variable, value, 'weight')};`);
        lines.push(`  ${base}-line-height: ${toCssValue(variable, value, 'lineHeight')};`);
        lines.push(`  ${base}-letter-spacing: ${toCssValue(variable, value, 'letterSpacing')};`);
      } else if (variable.type === 'typography') {
        lines.push(`  ${cssVarName(variable)}: ${formatTypographyScalar(variable, value as string | number)};`);
      } else {
        lines.push(`  ${cssVarName(variable)}: ${toCssValue(variable, value)};`);
      }
    }
    lines.push('}');
    lines.push('');
  }

  for (const collection of raw.collections) {
    const collectionSlug = slug(collection.id || collection.name);
    for (const mode of collection.modes) {
      const modeSlug = slug(mode.id || mode.name);
      const selector =
        raw.collections.length === 1
          ? `:root[data-theme="${modeSlug}"]`
          : `:root[data-theme="${modeSlug}"][data-brand="${collectionSlug}"]`;

      lines.push(`${selector} {`);
      for (const variable of collection.variables) {
        const value = variable.values[mode.id];
        if (value === undefined) continue;

        if (variable.type === 'typography' && isTypographyObject(value)) {
          const base = cssVarName(variable);
          lines.push(`  ${base}-family: ${toCssValue(variable, value, 'family')};`);
          lines.push(`  ${base}-size: ${toCssValue(variable, value, 'size')};`);
          lines.push(`  ${base}-weight: ${toCssValue(variable, value, 'weight')};`);
          lines.push(`  ${base}-line-height: ${toCssValue(variable, value, 'lineHeight')};`);
          lines.push(`  ${base}-letter-spacing: ${toCssValue(variable, value, 'letterSpacing')};`);
        } else if (variable.type === 'typography') {
          lines.push(`  ${cssVarName(variable)}: ${formatTypographyScalar(variable, value as string | number)};`);
        } else {
          lines.push(`  ${cssVarName(variable)}: ${toCssValue(variable, value)};`);
        }
      }
      lines.push('}');
      lines.push('');
    }
  }

  return `${lines.join('\n').trim()}\n`;
}

function buildTs(raw: RawExport): string {
  const mapping = raw.collections.flatMap((collection) =>
    collection.variables.map((variable) => ({
      figmaName: variable.name,
      cssVar: cssVarName(variable),
      type: variable.type,
      tier: variable.tier,
      collection: collection.id
    }))
  );

  return `/* Auto-generated from src/tokens/figma/raw-export.json */
export type TokenType = 'color' | 'typography' | 'spacing' | 'radius' | 'shadow' | 'z-index' | 'motion';
export type TokenTier = 'primitive' | 'semantic';

export type TypographyTokenValue = {
  family: string;
  style?: string;
  size: number;
  weight: number;
  lineHeight: number;
  letterSpacing: number;
};

export type TokenValue = string | number | TypographyTokenValue;

export type VariableToken = {
  name: string;
  type: TokenType;
  tier: TokenTier;
  values: Record<string, TokenValue>;
};

export type TokenCollection = {
  id: string;
  name: string;
  modes: Array<{ id: string; name: string }>;
  variables: VariableToken[];
};

export const tokenCollections: TokenCollection[] = ${JSON.stringify(raw.collections, null, 2)};

export const tokenMeta = ${JSON.stringify(raw.meta, null, 2)} as const;

export const tokenNameToCssVar = ${JSON.stringify(mapping, null, 2)} as const;
`;
}

function buildSchema(): string {
  return JSON.stringify(
    {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      title: 'Token Export Schema',
      type: 'object',
      required: ['meta', 'collections'],
      properties: {
        meta: {
          type: 'object',
          required: ['fileKey', 'sourceFile', 'extractedAt', 'sourceNodes', 'limitations']
        },
        collections: {
          type: 'array',
          items: {
            type: 'object',
            required: ['id', 'name', 'modes', 'variables']
          }
        }
      }
    },
    null,
    2
  );
}

function run(): void {
  const raw = JSON.parse(readFileSync(RAW_PATH, 'utf-8')) as RawExport;
  writeFileSync(CSS_PATH, buildCss(raw), 'utf-8');
  writeFileSync(TS_PATH, buildTs(raw), 'utf-8');
  writeFileSync(SCHEMA_PATH, buildSchema(), 'utf-8');
  console.log('Generated tokens.css, tokens.ts, and tokens.schema.json');
}

run();

if (process.argv.includes('--watch')) {
  watch(RAW_PATH, { persistent: true }, () => {
    try {
      run();
    } catch (error) {
      console.error('Failed to regenerate tokens:', error);
    }
  });
  console.log('Watching raw-export.json for changes...');
}
