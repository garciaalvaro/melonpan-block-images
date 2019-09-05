import { get } from "lodash";

export const getImageRatio = (image: ImageRaw): string => {
	const width = get(image, ["sizes", "full", "width"]);
	const height = get(image, ["sizes", "full", "height"]);

	let ratio: number;
	ratio = width / height;
	ratio = Math.round(ratio * 1000) / 1000;

	return ratio.toString();
};
