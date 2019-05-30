import l from "utils";

const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.editor;

const ControlsPlaceholder: React.ComponentType<Edit> = props => {
	const { setImages, attributes } = props;
	const { images, images_id } = attributes;
	const has_images = images ? !!images.length : false;

	return (
		<MediaPlaceholder
			accept="image/*"
			addToGallery={has_images}
			allowedTypes={["image"]}
			isAppender={has_images}
			labels={{
				title: __("Images"),
				instructions: __(
					"Drag images, upload new ones or select files from your library."
				)
			}}
			multiple
			onSelect={setImages}
			value={has_images ? images_id : undefined}
		/>
	);
};

export default ControlsPlaceholder;
