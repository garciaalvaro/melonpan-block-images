import uuid from "uuid/v4";

import { getImageSrcset, getImageRatio, getContainerRatio } from "utils/tools";
import { Controls } from "../Controls/Controls";
import { Toolbar } from "../Toolbar/Toolbar";
import { Placeholder } from "../Placeholder/Placeholder";
import { BlockContainer } from "../BlockContainer/BlockContainer";

const { get } = lodash;
const { Fragment, useCallback, useEffect, useMemo } = wp.element;

export const Edit: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { images, cover, fixed_dimension, id } = attributes;
	const setImages = useCallback(
		(images: ImageRaw[]) =>
			setAttributes({
				images_id: images.map(({ id }) => id),
				images: images.map(image => ({
					id: image.id,
					alt: image.alt,
					link: image.link,
					caption: image.caption,
					ratio: getImageRatio(image),
					srcset: getImageSrcset(image.sizes),
					url:
						get(image, ["sizes", "large", "url"]) ||
						get(image, ["media_details", "sizes", "large", "source_url"]) ||
						image.url
				}))
			}),
		[images]
	);
	const container_ratio = useMemo(
		() => getContainerRatio(images, cover, fixed_dimension),
		[images, cover, fixed_dimension]
	);

	useEffect(() => {
		if (id) {
			return;
		}

		setAttributes({ id: uuid() });
	}, []);

	return (
		<Fragment>
			<Controls {...props} setImages={setImages} />
			{images && !!images.length ? (
				<Fragment>
					<Toolbar {...props} setImages={setImages} />
					<BlockContainer {...props} container_ratio={container_ratio} />
				</Fragment>
			) : (
				<Placeholder {...props} setImages={setImages} />
			)}
		</Fragment>
	);
};
