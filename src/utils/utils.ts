export const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

export const cleanText = (strInputCode : string) => strInputCode.replace(/<\/?[^>]+(>|$)/g, "")