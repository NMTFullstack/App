export const fallbackLng = "vi";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";
export const cookieName = "i18next";
export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
