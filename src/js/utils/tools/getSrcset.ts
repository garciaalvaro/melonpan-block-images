const { toArray, mapValues, sortBy, flow } = lodash;

export const getSrcset = (sizes: ImageRaw["sizes"]): string =>
	flow([
		(sizes: ImageRaw["sizes"]) =>
			mapValues(sizes, (value: any, key: string) => ({
				...value,
				size: key
			})),
		toArray,
		(sizes: ImageRaw["sizes"]): (ImageSize | undefined)[] =>
			sortBy(sizes, "width"),
		(sizes: ImageSize[]) =>
			sizes.map(({ url, width }: ImageSize): string => `${url} ${width}w`),
		(sizes: string[]) => sizes.join(", ")
	])(sizes);
