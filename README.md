# The Locker Storybook

Base Storybook infrastructure for a React + TypeScript component library.

## Requirements

- Node.js 20.x (recommended)

If you use `nvm`:

```bash
nvm use
```

## Start

```bash
npm install
npm run storybook
```

## Build tokens only

```bash
npm run tokens:build
```

## Build static Storybook

```bash
npm run build-storybook
```

## Structure

- `.storybook/`: Storybook configuration
- `src/components/`: Library components
- `src/tokens/`: Figma raw export, generated CSS/TS tokens, and theme helpers
- `src/styles/`: Global styles used in Storybook
