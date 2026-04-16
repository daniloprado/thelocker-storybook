# Tokens + Foundations

This folder contains token ingestion from Figma MCP, generated outputs, and runtime theme helpers.

## Source of truth

- Raw Figma export: `src/tokens/figma/raw-export.json`
- Generated artifacts:
  - `src/tokens/generated/tokens.css`
  - `src/tokens/generated/tokens.ts`
  - `src/tokens/generated/tokens.schema.json`

## Collections and modes

- Collections: `Core` (inferred from MCP-exported variables)
- Modes: `Light`

## Primitive vs semantic

- Primitive tokens: scale values like `Green/100`, `Blue/400`, `Spacing/24`, `Radius/Small`
- Semantic tokens: contextual values like `Blue/Primary`, `Neutral/Primary - 500`, `Heading H2 - Web`

## Figma name mapping

| Figma variable name | Generated CSS variable |
| --- | --- |
| `Green/100` | `--color-green-100` |
| `Green/500` | `--color-green-500` |
| `Red/100` | `--color-red-100` |
| `Red/500` | `--color-red-500` |
| `Orange/100` | `--color-orange-100` |
| `Orange/500` | `--color-orange-500` |
| `Accent/Lighter Turquoise` | `--color-accent-lighter-turquoise` |
| `Accent/Primary Turquoise` | `--color-accent-primary-turquoise` |
| `Accent/Lighter Violet` | `--color-accent-lighter-violet` |
| `Accent/Primary Violet` | `--color-accent-primary-violet` |
| `Yellow/100` | `--color-yellow-100` |
| `Yellow/400` | `--color-yellow-400` |
| `Blue/100` | `--color-blue-100` |
| `Blue/400` | `--color-blue-400` |
| `Blue/500` | `--color-blue-500` |
| `Grey/200` | `--color-grey-200` |
| `Grey/500` | `--color-grey-500` |
| `Neutral/Primary - 500` | `--color-neutral-primary-500` |
| `Blue/Primary - 500` | `--color-blue-primary-500` |
| `Spacing/24` | `--space-24` |
| `Radius/Small` | `--radius-small` |
| `Radius/Full` | `--radius-full` |
| `Heading H2 - Web` | `--font-heading-h2-web-*` |
| `Kit/Primary` | `--color-kit-primary` |
| `Text-WhiteButton` | `--color-text-whitebutton` |
| `Family/Heading` | `--font-family-heading` |
| `Family/Body` | `--font-family-body` |
| `Size/Body` | `--font-size-body` |
| `Weight/Bold` | `--font-weight-bold` |

## Notes

- Original Figma names are preserved in `raw-export.json` and `generated/tokens.ts`.
- Complete mapping is available in `generated/tokens.ts` (`tokenNameToCssVar`).
- In this environment, MCP did not return a single file-level variable collection dump, so export is aggregated from source nodes (`87:124`, `2:45`, `1:161`, `87:116`, `87:273`, `87:344`, `87:371`, `294:659`) with provenance tracked in `tokenMeta`.
