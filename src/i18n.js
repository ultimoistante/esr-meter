import { derived, writable } from "svelte/store";
import { getProperty } from "./helpers";
import contents_it from "../src/assets/contents_it.json";
import contents_en from "../src/assets/contents_en.json";


const contents = {
	en: contents_en,
	it: contents_it
}

export const currentLocale = writable("en");
export const availableLocales = Object.keys(contents);


const translate = (locale, path, fallbackValue, vars) => {
	if (!locale || !(locale in contents)) throw new Error(`invalid locale "${locale}"`);
	//
	return getProperty(contents[locale], path, fallbackValue);
}


export const localizedContent = derived(currentLocale, ($currentLocale) => (path, fallbackValue, vars) => translate($currentLocale, path, fallbackValue, vars));