/* Auto-generated from src/tokens/figma/raw-export.json */
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

export const tokenCollections: TokenCollection[] = [
  {
    "id": "primitives",
    "name": "Primitives",
    "modes": [
      {
        "id": "light",
        "name": "Light"
      }
    ],
    "variables": [
      {
        "name": "Grey/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#F8F8F8"
        }
      },
      {
        "name": "Grey/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#F3F3F3"
        }
      },
      {
        "name": "Grey/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#E7E7E7"
        }
      },
      {
        "name": "Grey/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Grey/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#B6B6B6"
        }
      },
      {
        "name": "Yellow/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFF4CF"
        }
      },
      {
        "name": "Yellow/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFEDAF"
        }
      },
      {
        "name": "Yellow/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFDC60"
        }
      },
      {
        "name": "Yellow/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFCA10"
        }
      },
      {
        "name": "Yellow/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D4A80D"
        }
      },
      {
        "name": "Blue/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D9EAFD"
        }
      },
      {
        "name": "Blue/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#BFDBFC"
        }
      },
      {
        "name": "Blue/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#80B8FA"
        }
      },
      {
        "name": "Blue/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Blue/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#357BCE"
        }
      },
      {
        "name": "Green/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#DAF4E7"
        }
      },
      {
        "name": "Green/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#C1EDD7"
        }
      },
      {
        "name": "Green/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#83DBAF"
        }
      },
      {
        "name": "Green/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#45C987"
        }
      },
      {
        "name": "Green/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#3AA771"
        }
      },
      {
        "name": "Red/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFDEE2"
        }
      },
      {
        "name": "Red/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFC9CF"
        }
      },
      {
        "name": "Red/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FF929E"
        }
      },
      {
        "name": "Red/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FF5C6E"
        }
      },
      {
        "name": "Red/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D44D5C"
        }
      },
      {
        "name": "Orange/100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFEDDC"
        }
      },
      {
        "name": "Orange/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFE1C5"
        }
      },
      {
        "name": "Orange/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFC28A"
        }
      },
      {
        "name": "Orange/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFA450"
        }
      },
      {
        "name": "Orange/600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D48943"
        }
      },
      {
        "name": "Neutral/200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#B6B4B5"
        }
      },
      {
        "name": "Neutral/400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#6D6A6A"
        }
      },
      {
        "name": "Neutral/500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#241F20"
        }
      }
    ]
  },
  {
    "id": "colors",
    "name": "Colors",
    "modes": [
      {
        "id": "light",
        "name": "Light"
      }
    ],
    "variables": [
      {
        "name": "Stroke/Primary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Stroke/Primary/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D9EAFD"
        }
      },
      {
        "name": "Stroke/Secondary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Stroke/Secondary/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Stroke/Neutral/Stronger",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B6B6"
        }
      },
      {
        "name": "Stroke/Neutral/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Stroke/Neutral/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#F3F3F3"
        }
      },
      {
        "name": "Text/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Text/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#6D6A6A"
        }
      },
      {
        "name": "Text/Critical",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D44D5C"
        }
      },
      {
        "name": "Text/Link",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Text/Invert/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#F8F8F8"
        }
      },
      {
        "name": "Text/Invert/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Text/On-primary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Text/On-primary/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B4B5"
        }
      },
      {
        "name": "Text/On-secondary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Text/On-secondary/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B4B5"
        }
      },
      {
        "name": "Background/Default",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Background/Primary",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFCA10"
        }
      },
      {
        "name": "Background/Primary/Hover",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D4A80D"
        }
      },
      {
        "name": "Background/Secondary",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Background/Secondary/Hover",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#357BCE"
        }
      },
      {
        "name": "Background/Emphasis",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#F8F8F8"
        }
      },
      {
        "name": "Icon/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Icon/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B4B5"
        }
      },
      {
        "name": "Icon/Primary",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Icon/Success",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#45C987"
        }
      },
      {
        "name": "Icon/Warning",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D44D5C"
        }
      },
      {
        "name": "Icon/Invert/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Icon/Invert/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Icon/On-primary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Icon/On-secondary/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Input/Text/Default",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#241F20"
        }
      },
      {
        "name": "Input/Text/Placeholder",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B6B6"
        }
      },
      {
        "name": "Input/Text/Disabled",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B6B6B6"
        }
      },
      {
        "name": "Input/Background/Default",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Input/Background/Focus",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Input/Background/Disabled",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#F3F3F3"
        }
      },
      {
        "name": "Input/Stroke/Default",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Input/Stroke/Focus",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Input/Stroke/Disabled",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Input/Stroke/Error",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D44D5C"
        }
      },
      {
        "name": "Input/Stroke/Warning",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFCA10"
        }
      }
    ]
  },
  {
    "id": "design",
    "name": "Design",
    "modes": [
      {
        "id": "light",
        "name": "Light"
      }
    ],
    "variables": [
      {
        "name": "Decorative/Blue/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Decorative/Blue/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D9EAFD"
        }
      },
      {
        "name": "Decorative/Yellow/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D4A80D"
        }
      },
      {
        "name": "Decorative/Yellow/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFF4CF"
        }
      },
      {
        "name": "Decorative/Green/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#3AA771"
        }
      },
      {
        "name": "Decorative/Green/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#DAF4E7"
        }
      },
      {
        "name": "Decorative/Orange/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D48943"
        }
      },
      {
        "name": "Decorative/Orange/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFEDDC"
        }
      },
      {
        "name": "Decorative/Pink/Strong",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#D48943"
        }
      },
      {
        "name": "Decorative/Pink/Weak",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFEDDC"
        }
      },
      {
        "name": "Spacing/1",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 4
        }
      },
      {
        "name": "Spacing/2",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 8
        }
      },
      {
        "name": "Spacing/3",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 12
        }
      },
      {
        "name": "Spacing/4",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 16
        }
      },
      {
        "name": "Spacing/5",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 20
        }
      },
      {
        "name": "Spacing/6",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 24
        }
      },
      {
        "name": "Spacing/7",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 28
        }
      },
      {
        "name": "Spacing/8",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 32
        }
      },
      {
        "name": "Radius/Small",
        "type": "radius",
        "tier": "primitive",
        "values": {
          "light": 4
        }
      },
      {
        "name": "Radius/Medium",
        "type": "radius",
        "tier": "primitive",
        "values": {
          "light": 8
        }
      },
      {
        "name": "Radius/Large",
        "type": "radius",
        "tier": "primitive",
        "values": {
          "light": 16
        }
      },
      {
        "name": "Radius/Full",
        "type": "radius",
        "tier": "primitive",
        "values": {
          "light": 200
        }
      },
      {
        "name": "Height/Small",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 24
        }
      },
      {
        "name": "Height/Medium",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 32
        }
      },
      {
        "name": "Height/Large",
        "type": "spacing",
        "tier": "primitive",
        "values": {
          "light": 40
        }
      }
    ]
  },
  {
    "id": "typography",
    "name": "Typography",
    "modes": [
      {
        "id": "light",
        "name": "Light"
      }
    ],
    "variables": [
      {
        "name": "Family/Heading",
        "type": "typography",
        "tier": "semantic",
        "values": {
          "light": "Mulish"
        }
      },
      {
        "name": "Family/Body",
        "type": "typography",
        "tier": "semantic",
        "values": {
          "light": "Mulish"
        }
      },
      {
        "name": "Size/Display",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 48
        }
      },
      {
        "name": "Size/Heading 1",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 40
        }
      },
      {
        "name": "Size/Heading 2",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 32
        }
      },
      {
        "name": "Size/Heading 3",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 24
        }
      },
      {
        "name": "Size/Heading 4",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 20
        }
      },
      {
        "name": "Size/Body",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 16
        }
      },
      {
        "name": "Size/Smaill",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 14
        }
      },
      {
        "name": "Size/Tiny",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 12
        }
      },
      {
        "name": "Weight/Regular",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": "Regular"
        }
      },
      {
        "name": "Weight/Bold",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": "Bold"
        }
      },
      {
        "name": "Line Height/16",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 16
        }
      },
      {
        "name": "Line Height/20",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 20
        }
      },
      {
        "name": "Line Height/24",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 24
        }
      },
      {
        "name": "Line Height/28",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 28
        }
      },
      {
        "name": "Line Height/32",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 32
        }
      },
      {
        "name": "Line Height/40",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 40
        }
      },
      {
        "name": "Line Height/48",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 48
        }
      },
      {
        "name": "Line Height/56",
        "type": "typography",
        "tier": "primitive",
        "values": {
          "light": 56
        }
      }
    ]
  }
];

export const tokenMeta = {
  "fileKey": "JpqUOwWPAM6x80LNylauHx",
  "sourceFile": "https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-",
  "extractedAt": "2026-08-18",
  "sourceNodes": [
    "1404:417"
  ],
  "limitations": [
    "Variables extracted via Figma Plugin API (getLocalVariableCollectionsAsync). Color aliases resolved to final hex values. Collections match Figma: Primitives, Colors, Design, Typography."
  ]
} as const;

export const tokenNameToCssVar = [
  {
    "figmaName": "Grey/100",
    "cssVar": "--color-grey-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Grey/200",
    "cssVar": "--color-grey-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Grey/400",
    "cssVar": "--color-grey-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Grey/500",
    "cssVar": "--color-grey-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Grey/600",
    "cssVar": "--color-grey-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Yellow/100",
    "cssVar": "--color-yellow-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Yellow/200",
    "cssVar": "--color-yellow-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Yellow/400",
    "cssVar": "--color-yellow-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Yellow/500",
    "cssVar": "--color-yellow-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Yellow/600",
    "cssVar": "--color-yellow-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Blue/100",
    "cssVar": "--color-blue-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Blue/200",
    "cssVar": "--color-blue-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Blue/400",
    "cssVar": "--color-blue-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Blue/500",
    "cssVar": "--color-blue-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Blue/600",
    "cssVar": "--color-blue-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Green/100",
    "cssVar": "--color-green-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Green/200",
    "cssVar": "--color-green-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Green/400",
    "cssVar": "--color-green-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Green/500",
    "cssVar": "--color-green-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Green/600",
    "cssVar": "--color-green-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Red/100",
    "cssVar": "--color-red-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Red/200",
    "cssVar": "--color-red-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Red/400",
    "cssVar": "--color-red-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Red/500",
    "cssVar": "--color-red-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Red/600",
    "cssVar": "--color-red-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Orange/100",
    "cssVar": "--color-orange-100",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Orange/200",
    "cssVar": "--color-orange-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Orange/400",
    "cssVar": "--color-orange-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Orange/500",
    "cssVar": "--color-orange-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Orange/600",
    "cssVar": "--color-orange-600",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Neutral/200",
    "cssVar": "--color-neutral-200",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Neutral/400",
    "cssVar": "--color-neutral-400",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Neutral/500",
    "cssVar": "--color-neutral-500",
    "type": "color",
    "tier": "primitive",
    "collection": "primitives"
  },
  {
    "figmaName": "Stroke/Primary/Strong",
    "cssVar": "--color-stroke-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Primary/Weak",
    "cssVar": "--color-stroke-primary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Secondary/Strong",
    "cssVar": "--color-stroke-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Secondary/Weak",
    "cssVar": "--color-stroke-secondary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Neutral/Stronger",
    "cssVar": "--color-stroke-neutral-stronger",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Neutral/Strong",
    "cssVar": "--color-stroke-neutral-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Stroke/Neutral/Weak",
    "cssVar": "--color-stroke-neutral-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Strong",
    "cssVar": "--color-text-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Weak",
    "cssVar": "--color-text-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Critical",
    "cssVar": "--color-text-critical",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Link",
    "cssVar": "--color-text-link",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Invert/Strong",
    "cssVar": "--color-text-invert-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/Invert/Weak",
    "cssVar": "--color-text-invert-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/On-primary/Strong",
    "cssVar": "--color-text-on-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/On-primary/Weak",
    "cssVar": "--color-text-on-primary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/On-secondary/Strong",
    "cssVar": "--color-text-on-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Text/On-secondary/Weak",
    "cssVar": "--color-text-on-secondary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Default",
    "cssVar": "--color-background-default",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Primary",
    "cssVar": "--color-background-primary",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Primary/Hover",
    "cssVar": "--color-background-primary-hover",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Secondary",
    "cssVar": "--color-background-secondary",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Secondary/Hover",
    "cssVar": "--color-background-secondary-hover",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Background/Emphasis",
    "cssVar": "--color-background-emphasis",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Strong",
    "cssVar": "--color-icon-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Weak",
    "cssVar": "--color-icon-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Primary",
    "cssVar": "--color-icon-primary",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Success",
    "cssVar": "--color-icon-success",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Warning",
    "cssVar": "--color-icon-warning",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Invert/Strong",
    "cssVar": "--color-icon-invert-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/Invert/Weak",
    "cssVar": "--color-icon-invert-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/On-primary/Strong",
    "cssVar": "--color-icon-on-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Icon/On-secondary/Strong",
    "cssVar": "--color-icon-on-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Text/Default",
    "cssVar": "--color-input-text-default",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Text/Placeholder",
    "cssVar": "--color-input-text-placeholder",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Text/Disabled",
    "cssVar": "--color-input-text-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Background/Default",
    "cssVar": "--color-input-background-default",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Background/Focus",
    "cssVar": "--color-input-background-focus",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Background/Disabled",
    "cssVar": "--color-input-background-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Stroke/Default",
    "cssVar": "--color-input-stroke-default",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Stroke/Focus",
    "cssVar": "--color-input-stroke-focus",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Stroke/Disabled",
    "cssVar": "--color-input-stroke-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Stroke/Error",
    "cssVar": "--color-input-stroke-error",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Input/Stroke/Warning",
    "cssVar": "--color-input-stroke-warning",
    "type": "color",
    "tier": "semantic",
    "collection": "colors"
  },
  {
    "figmaName": "Decorative/Blue/Strong",
    "cssVar": "--color-decorative-blue-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Blue/Weak",
    "cssVar": "--color-decorative-blue-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Yellow/Strong",
    "cssVar": "--color-decorative-yellow-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Yellow/Weak",
    "cssVar": "--color-decorative-yellow-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Green/Strong",
    "cssVar": "--color-decorative-green-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Green/Weak",
    "cssVar": "--color-decorative-green-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Orange/Strong",
    "cssVar": "--color-decorative-orange-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Orange/Weak",
    "cssVar": "--color-decorative-orange-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Pink/Strong",
    "cssVar": "--color-decorative-pink-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Decorative/Pink/Weak",
    "cssVar": "--color-decorative-pink-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/1",
    "cssVar": "--space-1",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/2",
    "cssVar": "--space-2",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/3",
    "cssVar": "--space-3",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/4",
    "cssVar": "--space-4",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/5",
    "cssVar": "--space-5",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/6",
    "cssVar": "--space-6",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/7",
    "cssVar": "--space-7",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Spacing/8",
    "cssVar": "--space-8",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Radius/Small",
    "cssVar": "--radius-small",
    "type": "radius",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Radius/Medium",
    "cssVar": "--radius-medium",
    "type": "radius",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Radius/Large",
    "cssVar": "--radius-large",
    "type": "radius",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Radius/Full",
    "cssVar": "--radius-full",
    "type": "radius",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Height/Small",
    "cssVar": "--space-height-small",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Height/Medium",
    "cssVar": "--space-height-medium",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Height/Large",
    "cssVar": "--space-height-large",
    "type": "spacing",
    "tier": "primitive",
    "collection": "design"
  },
  {
    "figmaName": "Family/Heading",
    "cssVar": "--font-family-heading",
    "type": "typography",
    "tier": "semantic",
    "collection": "typography"
  },
  {
    "figmaName": "Family/Body",
    "cssVar": "--font-family-body",
    "type": "typography",
    "tier": "semantic",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Display",
    "cssVar": "--font-size-display",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Heading 1",
    "cssVar": "--font-size-heading-1",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Heading 2",
    "cssVar": "--font-size-heading-2",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Heading 3",
    "cssVar": "--font-size-heading-3",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Heading 4",
    "cssVar": "--font-size-heading-4",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Body",
    "cssVar": "--font-size-body",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Smaill",
    "cssVar": "--font-size-smaill",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Size/Tiny",
    "cssVar": "--font-size-tiny",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Weight/Regular",
    "cssVar": "--font-weight-regular",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Weight/Bold",
    "cssVar": "--font-weight-bold",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/16",
    "cssVar": "--font-line-height-16",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/20",
    "cssVar": "--font-line-height-20",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/24",
    "cssVar": "--font-line-height-24",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/28",
    "cssVar": "--font-line-height-28",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/32",
    "cssVar": "--font-line-height-32",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/40",
    "cssVar": "--font-line-height-40",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/48",
    "cssVar": "--font-line-height-48",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  },
  {
    "figmaName": "Line Height/56",
    "cssVar": "--font-line-height-56",
    "type": "typography",
    "tier": "primitive",
    "collection": "typography"
  }
] as const;
