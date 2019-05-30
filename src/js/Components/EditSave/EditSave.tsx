import l, { getRatio, getSrcset } from "utils";
import ControlsSidebar from "../Controls/Sidebar";
import ControlsToolbar from "../Controls/Toolbar";
import ControlsPlaceholder from "../Controls/Placeholder";
import Container from "../Content/Container";

const { get } = lodash;
const { Fragment } = wp.element;

const Save: React.ComponentType<Save> = props => {
	const { images } = props.attributes;

	if (!images) {
		return null;
	}

	return <Container {...props} />;
};
const Edit: React.ComponentType<Edit> = props => {
	const { attributes, setAttributes } = props;
	const { images, layout } = attributes;
	const setImages = (images: Object[]) =>
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
			{images && images.length ? (
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

export { Edit, Save };
