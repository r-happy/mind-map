export const screens = {
  md: "768px",
} as const satisfies Record<string, `${number}px`>;

export function mediaQueryScreen(screen: keyof typeof screens): string {
  return `screen and (min-width: ${screens[screen]})`;
}

export const colorSchemes = {
  light: "light",
  dark: "dark",
};

export function mediaQueryColorScheme(colorScheme: keyof typeof colorSchemes) {
  return `(prefers-color-scheme: ${colorScheme})`;
}
