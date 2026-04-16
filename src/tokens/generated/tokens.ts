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
    "id": "core",
    "name": "Core",
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
          "light": "#B9B9B9"
        }
      },
      {
        "name": "Grey/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#F8F8F8"
        }
      },
      {
        "name": "Grey/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#F3F3F3"
        }
      },
      {
        "name": "Grey/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#E7E7E7"
        }
      },
      {
        "name": "Grey/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#DBDBDB"
        }
      },
      {
        "name": "Grey/Dark - 600",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#B9B9B9"
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
        "name": "Yellow/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFF4CF"
        }
      },
      {
        "name": "Yellow/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFEDAF"
        }
      },
      {
        "name": "Yellow/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFDC60"
        }
      },
      {
        "name": "Yellow/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFCA10"
        }
      },
      {
        "name": "Yellow/Dark - 600",
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
        "name": "Blue/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D9EAFD"
        }
      },
      {
        "name": "Blue/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#BFDBFC"
        }
      },
      {
        "name": "Blue/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#80B8FA"
        }
      },
      {
        "name": "Blue/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "Blue/Dark - 600",
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
        "name": "Green/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#DAF4E7"
        }
      },
      {
        "name": "Green/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#C1EDD7"
        }
      },
      {
        "name": "Green/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#83DBAF"
        }
      },
      {
        "name": "Green/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#45C987"
        }
      },
      {
        "name": "Green/Dark - 600",
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
        "name": "Red/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFDEE2"
        }
      },
      {
        "name": "Red/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFC9CF"
        }
      },
      {
        "name": "Red/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FF929E"
        }
      },
      {
        "name": "Red/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FF5C6E"
        }
      },
      {
        "name": "Red/Dark - 600",
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
        "name": "Orange/Lightest - 100",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFEDDC"
        }
      },
      {
        "name": "Orange/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFE1C5"
        }
      },
      {
        "name": "Orange/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFC28A"
        }
      },
      {
        "name": "Orange/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFA450"
        }
      },
      {
        "name": "Orange/Dark - 600",
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
      },
      {
        "name": "Neutral/Lighter - 200",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#B6B4B5"
        }
      },
      {
        "name": "Neutral/Light - 400",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#6D6A6A"
        }
      },
      {
        "name": "Neutral/Primary - 500",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#241F20"
        }
      },
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
          "light": "#45C987"
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
          "light": "#B9B9B9"
        }
      },
      {
        "name": "Input/Text/Disabled",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#B9B9B9"
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
        "name": "White/Primary - 500",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "Black",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#151112"
        }
      },
      {
        "name": "Grey-50",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FCFCFC"
        }
      },
      {
        "name": "Blue-50",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#EEF7FC"
        }
      },
      {
        "name": "Blue/Primary",
        "type": "color",
        "tier": "semantic",
        "values": {
          "light": "#4094F7"
        }
      },
      {
        "name": "grayscale/White",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#FFFFFF"
        }
      },
      {
        "name": "grayscale/Gray60",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#DAE0E6"
        }
      },
      {
        "name": "grayscale/Gray80",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#AAAEB3"
        }
      },
      {
        "name": "Accent/Lighter Turquoise",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#C0F1F4"
        }
      },
      {
        "name": "Accent/Primary Turquoise",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#42D5DD"
        }
      },
      {
        "name": "Accent/Lighter Violet",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#F2D5FD"
        }
      },
      {
        "name": "Accent/Primary Violet",
        "type": "color",
        "tier": "primitive",
        "values": {
          "light": "#D980FA"
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
      },
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
  "extractedAt": "2026-04-15",
  "sourceNodes": [],
  "limitations": [
    "Variables extracted via Figma Plugin API (getLocalVariableCollectionsAsync). Color aliases resolved to final hex values."
  ]
} as const;

export const tokenNameToCssVar = [
  {
    "figmaName": "Grey/100",
    "cssVar": "--color-grey-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/200",
    "cssVar": "--color-grey-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/400",
    "cssVar": "--color-grey-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/500",
    "cssVar": "--color-grey-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/600",
    "cssVar": "--color-grey-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/Lightest - 100",
    "cssVar": "--color-grey-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/Lighter - 200",
    "cssVar": "--color-grey-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/Light - 400",
    "cssVar": "--color-grey-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/Primary - 500",
    "cssVar": "--color-grey-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey/Dark - 600",
    "cssVar": "--color-grey-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/100",
    "cssVar": "--color-yellow-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/200",
    "cssVar": "--color-yellow-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/400",
    "cssVar": "--color-yellow-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/500",
    "cssVar": "--color-yellow-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/600",
    "cssVar": "--color-yellow-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/Lightest - 100",
    "cssVar": "--color-yellow-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/Lighter - 200",
    "cssVar": "--color-yellow-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/Light - 400",
    "cssVar": "--color-yellow-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/Primary - 500",
    "cssVar": "--color-yellow-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Yellow/Dark - 600",
    "cssVar": "--color-yellow-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/100",
    "cssVar": "--color-blue-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/200",
    "cssVar": "--color-blue-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/400",
    "cssVar": "--color-blue-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/500",
    "cssVar": "--color-blue-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/600",
    "cssVar": "--color-blue-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Lightest - 100",
    "cssVar": "--color-blue-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Lighter - 200",
    "cssVar": "--color-blue-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Light - 400",
    "cssVar": "--color-blue-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Primary - 500",
    "cssVar": "--color-blue-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Dark - 600",
    "cssVar": "--color-blue-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/100",
    "cssVar": "--color-green-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/200",
    "cssVar": "--color-green-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/400",
    "cssVar": "--color-green-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/500",
    "cssVar": "--color-green-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/600",
    "cssVar": "--color-green-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/Lightest - 100",
    "cssVar": "--color-green-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/Lighter - 200",
    "cssVar": "--color-green-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/Light - 400",
    "cssVar": "--color-green-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/Primary - 500",
    "cssVar": "--color-green-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Green/Dark - 600",
    "cssVar": "--color-green-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/100",
    "cssVar": "--color-red-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/200",
    "cssVar": "--color-red-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/400",
    "cssVar": "--color-red-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/500",
    "cssVar": "--color-red-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/600",
    "cssVar": "--color-red-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/Lightest - 100",
    "cssVar": "--color-red-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/Lighter - 200",
    "cssVar": "--color-red-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/Light - 400",
    "cssVar": "--color-red-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/Primary - 500",
    "cssVar": "--color-red-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Red/Dark - 600",
    "cssVar": "--color-red-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/100",
    "cssVar": "--color-orange-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/200",
    "cssVar": "--color-orange-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/400",
    "cssVar": "--color-orange-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/500",
    "cssVar": "--color-orange-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/600",
    "cssVar": "--color-orange-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/Lightest - 100",
    "cssVar": "--color-orange-lightest-100",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/Lighter - 200",
    "cssVar": "--color-orange-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/Light - 400",
    "cssVar": "--color-orange-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/Primary - 500",
    "cssVar": "--color-orange-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Orange/Dark - 600",
    "cssVar": "--color-orange-dark-600",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/200",
    "cssVar": "--color-neutral-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/400",
    "cssVar": "--color-neutral-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/500",
    "cssVar": "--color-neutral-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/Lighter - 200",
    "cssVar": "--color-neutral-lighter-200",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/Light - 400",
    "cssVar": "--color-neutral-light-400",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Neutral/Primary - 500",
    "cssVar": "--color-neutral-primary-500",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Primary/Strong",
    "cssVar": "--color-stroke-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Primary/Weak",
    "cssVar": "--color-stroke-primary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Secondary/Strong",
    "cssVar": "--color-stroke-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Secondary/Weak",
    "cssVar": "--color-stroke-secondary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Neutral/Strong",
    "cssVar": "--color-stroke-neutral-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Stroke/Neutral/Weak",
    "cssVar": "--color-stroke-neutral-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/Strong",
    "cssVar": "--color-text-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/Weak",
    "cssVar": "--color-text-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/Critical",
    "cssVar": "--color-text-critical",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/Invert/Strong",
    "cssVar": "--color-text-invert-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/Invert/Weak",
    "cssVar": "--color-text-invert-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/On-primary/Strong",
    "cssVar": "--color-text-on-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/On-primary/Weak",
    "cssVar": "--color-text-on-primary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/On-secondary/Strong",
    "cssVar": "--color-text-on-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Text/On-secondary/Weak",
    "cssVar": "--color-text-on-secondary-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Default",
    "cssVar": "--color-background-default",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Primary",
    "cssVar": "--color-background-primary",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Primary/Hover",
    "cssVar": "--color-background-primary-hover",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Secondary",
    "cssVar": "--color-background-secondary",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Secondary/Hover",
    "cssVar": "--color-background-secondary-hover",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Background/Emphasis",
    "cssVar": "--color-background-emphasis",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Strong",
    "cssVar": "--color-icon-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Weak",
    "cssVar": "--color-icon-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Invert/Strong",
    "cssVar": "--color-icon-invert-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Invert/Weak",
    "cssVar": "--color-icon-invert-weak",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/On-primary/Strong",
    "cssVar": "--color-icon-on-primary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/On-secondary/Strong",
    "cssVar": "--color-icon-on-secondary-strong",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Success",
    "cssVar": "--color-icon-success",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Icon/Warning",
    "cssVar": "--color-icon-warning",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Text/Default",
    "cssVar": "--color-input-text-default",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Text/Placeholder",
    "cssVar": "--color-input-text-placeholder",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Text/Disabled",
    "cssVar": "--color-input-text-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Background/Default",
    "cssVar": "--color-input-background-default",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Background/Focus",
    "cssVar": "--color-input-background-focus",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Background/Disabled",
    "cssVar": "--color-input-background-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Stroke/Default",
    "cssVar": "--color-input-stroke-default",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Stroke/Focus",
    "cssVar": "--color-input-stroke-focus",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Stroke/Disabled",
    "cssVar": "--color-input-stroke-disabled",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Input/Stroke/Error",
    "cssVar": "--color-input-stroke-error",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "White/Primary - 500",
    "cssVar": "--color-white-primary-500",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Black",
    "cssVar": "--color-black",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Grey-50",
    "cssVar": "--color-grey-50",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue-50",
    "cssVar": "--color-blue-50",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Blue/Primary",
    "cssVar": "--color-blue-primary",
    "type": "color",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "grayscale/White",
    "cssVar": "--color-grayscale-white",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "grayscale/Gray60",
    "cssVar": "--color-grayscale-gray60",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "grayscale/Gray80",
    "cssVar": "--color-grayscale-gray80",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Accent/Lighter Turquoise",
    "cssVar": "--color-accent-lighter-turquoise",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Accent/Primary Turquoise",
    "cssVar": "--color-accent-primary-turquoise",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Accent/Lighter Violet",
    "cssVar": "--color-accent-lighter-violet",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Accent/Primary Violet",
    "cssVar": "--color-accent-primary-violet",
    "type": "color",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/1",
    "cssVar": "--space-1",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/2",
    "cssVar": "--space-2",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/3",
    "cssVar": "--space-3",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/4",
    "cssVar": "--space-4",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/5",
    "cssVar": "--space-5",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/6",
    "cssVar": "--space-6",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/7",
    "cssVar": "--space-7",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Spacing/8",
    "cssVar": "--space-8",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Radius/Small",
    "cssVar": "--radius-small",
    "type": "radius",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Radius/Medium",
    "cssVar": "--radius-medium",
    "type": "radius",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Radius/Large",
    "cssVar": "--radius-large",
    "type": "radius",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Radius/Full",
    "cssVar": "--radius-full",
    "type": "radius",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Height/Small",
    "cssVar": "--space-height-small",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Height/Medium",
    "cssVar": "--space-height-medium",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Height/Large",
    "cssVar": "--space-height-large",
    "type": "spacing",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Family/Heading",
    "cssVar": "--font-family-heading",
    "type": "typography",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Family/Body",
    "cssVar": "--font-family-body",
    "type": "typography",
    "tier": "semantic",
    "collection": "core"
  },
  {
    "figmaName": "Size/Display",
    "cssVar": "--font-size-display",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Heading 1",
    "cssVar": "--font-size-heading-1",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Heading 2",
    "cssVar": "--font-size-heading-2",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Heading 3",
    "cssVar": "--font-size-heading-3",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Heading 4",
    "cssVar": "--font-size-heading-4",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Body",
    "cssVar": "--font-size-body",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Smaill",
    "cssVar": "--font-size-smaill",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Size/Tiny",
    "cssVar": "--font-size-tiny",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Weight/Regular",
    "cssVar": "--font-weight-regular",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Weight/Bold",
    "cssVar": "--font-weight-bold",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/16",
    "cssVar": "--font-line-height-16",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/20",
    "cssVar": "--font-line-height-20",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/24",
    "cssVar": "--font-line-height-24",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/28",
    "cssVar": "--font-line-height-28",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/32",
    "cssVar": "--font-line-height-32",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/40",
    "cssVar": "--font-line-height-40",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/48",
    "cssVar": "--font-line-height-48",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  },
  {
    "figmaName": "Line Height/56",
    "cssVar": "--font-line-height-56",
    "type": "typography",
    "tier": "primitive",
    "collection": "core"
  }
] as const;
