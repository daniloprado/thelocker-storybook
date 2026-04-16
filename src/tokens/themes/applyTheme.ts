export type ThemeOptions = {
  theme?: string;
  brand?: string;
  root?: HTMLElement;
};

export function applyTheme(options: ThemeOptions = {}): void {
  const {
    theme = 'light',
    brand = 'core',
    root = document.documentElement
  } = options;

  root.dataset.theme = theme;
  root.dataset.brand = brand;
}
