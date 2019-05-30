import l from "./log";

const { get } = lodash;

const getRatio = (image: Object): string => {
	const width =
		get(image, ["media_details", "width"]) ||
		get(image, ["sizes", "large", "width"]);
	const height =
		get(image, ["media_details", "height"]) ||
		get(image, ["sizes", "large", "height"]);
	let ratio;
	ratio = width / height;
	ratio = Math.round(ratio * 1000) / 1000;
	ratio = ratio.toString();

	return ratio;
};

export default getRatio;
