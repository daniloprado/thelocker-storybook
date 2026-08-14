---
name: code-to-figma
description: >-
  Designs a Storybook/React component as a production Figma component set on a
  given page, using the file's variables, existing components, variants, props,
  and slots. Use when the user asks to design in Figma from Storybook/code,
  push a component to Figma, code-to-Figma, or provides a Storybook component
  plus a Figma page URL.
---

# Code-to-Figma

Turn a **Storybook (or React) component** into a **Figma design-system component** on a destination page. Inputs are only:

1. Storybook component (name and/or path, e.g. `Components/Table` → `src/components/Table/`)
2. Destination Figma page URL (`figma.com/design/:fileKey/...?node-id=page`)

Do not invent a new file or a new token collection. Build **on the destination page**, with **that file's variables** and **existing components**.

## Prerequisites (mandatory)

Before any `use_figma` call:

1. Load **figma-use** (`SKILL.md` + gotchas as needed).
2. Load **figma-generate-library** — this is component creation, not a screen mock.
3. Pass `skillNames: "figma-use,figma-generate-library"` on every `use_figma` call.

Never call `use_figma` without those skills. Never parallelize `use_figma` writes. One page switch (`await figma.setCurrentPageAsync`) per call. Always `return` created/mutated IDs.

## Inputs

Parse the Figma URL:

- `fileKey` from `/design/:fileKey/`
- `nodeId`: `node-id=1462-4965` → `1462:4965` (hyphens → colons)
- Confirm the node is a **PAGE** (or find the page that contains it)

If either input is missing, ask for it. Do not guess a page.

## Workflow

Copy and track:

```
Code-to-Figma
- [ ] 1. Read code (tsx, css, stories)
- [ ] 2. Discover Figma page, variables, reusable components
- [ ] 3. Lock architecture (building blocks vs parent, variant cap)
- [ ] 4. Build atoms → molecules → organism (one set at a time)
- [ ] 5. Bind variables; add TEXT / BOOLEAN / INSTANCE_SWAP / SLOT
- [ ] 6. Screenshot + fix (slots, height, states, composition)
```

### 1. Read the Storybook source

Read together:

- `Component.tsx` — props, variants, composition, defaults
- `Component.css` — padding, type, colors, states (`:hover`, disabled, active)
- `Component.stories.tsx` — canonical examples and sample data

Extract a **prop/variant map**: every visual axis in code should exist in Figma as a **variant**, **boolean**, **text**, **swap**, or **slot**. Map CSS variables (`var(--space-3)`) to **Figma variable names** after discovery — never hardcode hex/px when a variable exists.

Product font comes from tokens/CSS (this repo: **Mulish**). Load it with `listAvailableFontsAsync` + `loadFontAsync`. Do not default to Inter.

### 2. Discover the destination file (read-only first)

One `use_figma` on the destination page:

- Page children and existing layout (changelog/checklist frames — **do not cover them**)
- Local variable collections and IDs for color, spacing, radius, type
- Components to **instance**, not redraw: Button, Chip, Avatar, Icon, Input, etc.

Match page conventions (this file: components around `x ≈ 46`, docs/changelog on the left at negative x). Scan `currentPage.children` and place new work to the **right/below** existing content.

Reuse decision:

- **Instance** if the nested UI is already a component (pagination → Button)
- **Building block** if a piece repeats and has its own states (cells, rows)
- **Rebuild** only when nothing in the file matches

Do not create new variable collections. Do not duplicate tokens.

### 3. Lock architecture before drawing

Variant product **must stay ≤ 30** per component set. If Size × Style × State would explode, split:

| Pattern | When |
|---|---|
| **Building Blocks/** (or `.Building Blocks/` to hide) | Repeating parts with their own State (cells, rows, segments) |
| **INSTANCE_SWAP** | Icons, avatars, chips — never a variant per icon |
| **SLOT** (`component.createSlot()`) | Arbitrary nested content |
| **BOOLEAN** | Optional slots, pagination, leading/trailing |

**Dependency order:** cell/header → row → pagination → table (atoms before the organism).

Parent variants should be **structural** (Size, Bordered, Empty/Loading). Child sets own **interaction states** (Hover, Active, Focus, Disabled, Selected).

See [architecture.md](architecture.md) for matrices, bindings, and slot rules.

### 4. Build incrementally

Never one-shot a full component set. Typical sequence (separate `use_figma` calls):

1. Base component (one default variant) with auto-layout + variable bindings + properties **before** `combineAsVariants`
2. Clone remaining variants; rebind fills/padding/type per axis
3. `figma.combineAsVariants` + grid (State as columns, Size as rows)
4. Next building block
5. Compose the organism from **instances** of those blocks
6. `get_screenshot` after each set; fix before the next

Rules that fail often:

- `layoutSizingHorizontal/Vertical` `HUG`/`FILL` only after `appendChild` into auto-layout
- Every text write: `loadFontAsync` → mutate → return IDs
- Colors 0–1; paints via `setBoundVariableForPaint` then reassign `fills`/`strokes`
- Empty **SLOT** nodes default to ~100×100 and **break layout** — hide (`visible = false`) or BOOLEAN-off by default
- `findAll` / `findOne` on trees with nested instances can throw; walk **direct children** when swapping nested instances after clone

### 5. Properties and slots

Add properties on each variant **before** combining (or they inherit). Link them:

| Type | `componentPropertyReferences` |
|---|---|
| TEXT | `{ characters: key }` on a text node |
| BOOLEAN | `{ visible: key }` |
| INSTANCE_SWAP | `{ mainComponent: key }` on an instance |
| SLOT | `createSlot()` auto-wires `slotContentId` |

Use as many as the code supports without junk: label/content text, show leading/trailing, swaps for Avatar/Chip/Icon, custom content slot, selection slot on rows.

Set `description` on each component set (purpose + how to use nested blocks).

### 6. Validate

Screenshot the **default organism** and the **state grid** of the smallest building block.

Fix immediately if you see:

- Placeholder rectangles in cells (empty slots still visible)
- Collapsed/wrapping header labels (column too narrow or slot still in flow)
- Hover / Active / Selected looking identical (differentiate fill **and** stroke)
- All sizes the same height (vertical padding + `layoutSizingVertical = 'HUG'`)
- Hardcoded fills that should be variables

## The Locker defaults

When working in this repo / [The Locker 2.0 Web](https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-):

- File key: `JpqUOwWPAM6x80LNylauHx`
- Collections: Typography, Design (spacing/radius), Colors, Primitives
- Prefer semantic colors (`Background/*`, `Text/*`, `Stroke/*`, `Input/*`) over primitives when they exist
- Primary filled Button is yellow — that is correct for pagination if you instance Button; do not invent a one-off blue page chip unless the file already has one
- WIP component pages are named `🟡  {Name}` and already have Changelog + Checklist instances — leave them

## Done

Return to the user:

- Link to the page (`node-id` of the page)
- Link to the main component set
- What was created (sets, variant axes, props/slots)
- What was reused from the library

## Additional resources

- Architecture, variant caps, bindings: [architecture.md](architecture.md)
- Worked Table example: [examples.md](examples.md)
