import l from "./log";

interface Img {
	url: string;
	width: number;
	[key: string]: any;
}
interface Sizes {
	[key: string]: Img;
}

const { toArray, mapValues, sortBy, flow } = lodash;

const getSrcset = (sizes: Sizes): string => {
	return flow([
		(sizes: Sizes) =>
			mapValues(sizes, (value: any, key: string) => ({
				...value,
				size: key
			})),
		toArray,
		(sizes: Img[]) => sortBy(sizes, "width"),
		(sizes: Img[]) =>
			sizes.map(({ url, width }: Img): string => `${url} ${width}w`),
		(sizes: Img[]) => sizes.join(", ")
	])(sizes);
};

export default getSrcset;
