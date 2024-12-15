const flags = {
    it: "https://flagcdn.com/it.svg",
    en: "https://flagcdn.com/us.svg",
    gb: "https://flagcdn.com/gb.svg",
    ja: "https://flagcdn.com/jp.svg",
    zh: "https://flagcdn.com/cn.svg",
    es: "https://flagcdn.com/es.svg"
};

export const getFlag = (language) => {
    return flags[language] || null;
};