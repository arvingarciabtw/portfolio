import type { ThemeState } from "./helpers.d.ts";

export const themeMap = {
	"dark-hard": "light-hard",
	"dark": "light",
	"light-hard": "dark-hard",
	"light": "dark",
};

export const contrastMap = {
	"dark-hard": "dark",
	"dark": "dark-hard",
	"light-hard": "light",
	"light": "light-hard",
};

export function setTheme(currentTheme: ThemeState, theme: string) {
	const one_year = 60 * 60 * 24 * 365;
	document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
	document.documentElement.setAttribute("data-theme", theme);
	currentTheme.val = theme;
}

export const theme = {
	mode(currentTheme: ThemeState) {
		let theme = currentTheme.val;

		switch (currentTheme.val) {
			case "dark-hard":
				theme = themeMap["dark-hard"];
				break;
			case "dark":
				theme = themeMap["dark"];
				break;
			case "light-hard":
				theme = themeMap["light-hard"];
				break;
			case "light":
				theme = themeMap["light"];
				break;
		}

		setTheme(currentTheme, theme);
	},
	contrast(currentTheme: ThemeState) {
		let theme = currentTheme.val;

		switch (currentTheme.val) {
			case "dark-hard":
				theme = contrastMap["dark-hard"];
				break;
			case "dark":
				theme = contrastMap["dark"];
				break;
			case "light-hard":
				theme = contrastMap["light-hard"];
				break;
			case "light":
				theme = contrastMap["light"];
				break;
		}

		setTheme(currentTheme, theme);
	},
};
