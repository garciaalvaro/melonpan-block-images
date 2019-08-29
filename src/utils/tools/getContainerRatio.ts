export const getContainerRatio = (
	images: Attributes["images"],
	cover: Attributes["cover"],
	fixed_dimension: Attributes["fixed_dimension"]
): number => {
	let container_ratio = 0;

	if (!images || cover) {
		return container_ratio;
	}

	images.forEach(image => {
		const image_ratio = parseFloat(image.ratio);

		container_ratio = container_ratio === 0 ? image_ratio : container_ratio;

		if (fixed_dimension === "height") {
			container_ratio = Math.max(image_ratio, container_ratio);
		} else {
			container_ratio = Math.min(image_ratio, container_ratio);
		}
	});

	return Math.max(container_ratio * 1000) / 1000;
};
