import l from "./log";
import { pr } from "./data-plugin";

const { compact, flow } = lodash;

const resolvePrefix = (el: string, separator: string): string => {
	if (el.startsWith("#")) {
		return el.replace("#", "");
	}

	return pr + separator + el;
};

const addPrefix = (
	els: string | null | (string | null)[],
	separator: string = "-"
): string => {
	if (els === null) {
		return "";
	}

	if (typeof els === "string") {
		return resolvePrefix(els, separator);
	}

	return flow([
		compact,
		(els: string[]) => els.map((el: string) => resolvePrefix(el, separator)),
		(els: string[]): string => els.join(" ")
	])(els);
};

export default addPrefix;
