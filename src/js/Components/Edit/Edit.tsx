import { getSrcset } from "utils/tools/getSrcset";
import { getRatio } from "utils/tools/getRatio";
import { ControlsSidebar } from "Components/Controls/ControlsSidebar";
import { ControlsToolbar } from "Components/Controls/ControlsToolbar";
import { ControlsPlaceholder } from "Components/Controls/ControlsPlaceholder";
import { Container } from "Components/Content/Container";

const { get } = lodash;
const { Fragment } = wp.element;

export const Edit: React.ComponentType<BlockPropsWithSetAttributes> = props => {
	const { attributes, setAttributes } = props;
	const { images } = attributes;
	const setImages = (images: ImageRaw[]) =>
		setAttributes({
			images_id: images.map(({ id }) => id),
			images: images.map(image => ({
				id: image.id,
				alt: image.alt,
				link: image.link,
				caption: image.caption,
				ratio: getRatio(image),
				srcset: getSrcset(image.sizes),
				url:
					get(image, ["sizes", "large", "url"]) ||
					get(image, ["media_details", "sizes", "large", "source_url"]) ||
					image.url
			}))
		});

	return (
		<Fragment>
			<ControlsSidebar {...props} setImages={setImages} />
			{images && !!images.length ? (
				<Fragment>
					<ControlsToolbar {...props} setImages={setImages} />
					<Container {...props} />
				</Fragment>
			) : (
				<ControlsPlaceholder {...props} setImages={setImages} />
			)}
		</Fragment>
	);
};
