export const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");