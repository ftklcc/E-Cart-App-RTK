import React, { useEffect, useState } from "react";
const THEME_KEY = "theme";

const THEMES = {
    LIGHT: "light",
    DARK: "dark",
};

const getTheme = () => {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === THEMES.DARK) return THEMES.DARK;
    return THEMES.LIGHT;
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
};

export const useTheme = () => {
    const [theme, setTheme] = useState(getTheme());

    const toggleTheme = () => {
        setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
    };

    useEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
    });

    return { theme, toggleTheme, isDark: theme === THEMES.DARK };
};
