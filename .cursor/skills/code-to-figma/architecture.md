# Code-to-Figma architecture

Companion to [SKILL.md](SKILL.md). Read this after locking the prop/variant map.

## Variant budget

`Size × Style × State × …` must be **≤ 30** variants in one component set.

If over budget, split in this order:

1. Pull repeating stateful pieces into **Building Blocks** (own Size × State).
2. Replace an axis with **INSTANCE_SWAP** (icons, avatars, chips).
3. Replace an axis with **BOOLEAN** or **SLOT**.
4. Split into two sets (e.g. Header Cell vs Body Cell) instead of Role × State.

**Parent** = composition + structural axes (Size, Bordered, Content=Data|Empty|Loading).  
**Child** = interaction states (Default, Hover, Active, Focus, Disabled, Selected).

## Suggested Table-like split

```
Table Cell          Size × State          (~18)
Table Header Cell   Size                  (3)
Table Row           Size × State          (~18)  — instances of Cell
Table Pagination    (single component)    — instances of Button
Table               Size × Content × Bordered  (≤18)
```

Row/cell **Striped** is not a third variant axis if it would blow the cap. Expose a BOOLEAN on Table and document: even rows → Grey/200 or swap row State.

## Variable bindings (required)

Never leave fills, strokes, padding, gap, or radius as raw numbers when a file variable exists.

| Property | API |
|---|---|
| Fill / text fill / stroke color | `figma.variables.setBoundVariableForPaint(paint, 'color', var)` then reassign array |
| Padding, itemSpacing | `node.setBoundVariable('paddingTop', var)` (all four sides) |
| Corner radius | `setBoundVariable('topLeftRadius', …)` (all four) |
| Font size / line height / family | `text.setBoundVariable('fontSize' \| 'lineHeight' \| 'fontFamily', var)` |

Map Storybook CSS → Figma names by **inspecting local variables**, not by guessing IDs. Typical Locker mapping:

- `--space-2`…`--space-4` → `Spacing/2`…`Spacing/4`
- `--radius-small` → `Radius/Small`
- `--color-background-default` → `Background/Default`
- `--color-background-emphasis` → `Background/Emphasis`
- `--color-text-strong` / `weak` → `Text/Strong` / `Text/Weak`
- `--color-stroke-neutral-strong` → `Stroke/Neutral/Strong`
- Hover wash → `Blue/100` (or `Decorative/Blue/Weak` if closer)
- Disabled → `Input/Background/Disabled` + `Input/Text/Disabled`
- Focus ring → `Input/Stroke/Focus`

Differentiate states with **fill and stroke**, not fill alone (Hover vs Active vs Selected otherwise look the same).

## Auto-layout

- Containers with related children: `figma.createAutoLayout()` / `layoutMode` on components.
- Size variants: change padding tokens, then `layoutSizingVertical = 'HUG'` so Large actually grows.
- After `combineAsVariants`, variants stack at (0,0) — grid them (gap ~24, padding ~40). State = columns, Size = rows.

## Slots

`component.createSlot()` creates a SlotNode + SLOT property.

Empty slots render as large placeholders and **will crush columns**. Defaults:

- `Show custom content` / trailing slot **BOOLEAN false**, or `slot.visible = false`
- Slot `layoutSizing` HUG, not a 100×100 frame

Selection columns: SLOT + BOOLEAN `Show selection`, hidden by default.

## Nested instances after clone

Do not `findAll`/`findOne` across an instance tree (stale IDs throw). Swap like this:

```js
const headerRow = table.children.find(c => c.name === 'Header');
for (const child of headerRow.children) {
  if (child.type === 'INSTANCE') child.swapComponent(headerVariant);
}
```

## combineAsVariants + properties

Add TEXT / BOOLEAN / INSTANCE_SWAP / SLOT on the **base component**, then clone. Combining merges definitions onto the set. Do not add properties on a variant that is already inside a set.

## Screenshot checklist

- Default organism matches Storybook playground (columns, sample rows, pagination)
- Cell state grid: six states visually distinct
- No 100px slot ghosts in headers
- Header labels on one line
- Empty and Loading variants actually hide/show the right layers
