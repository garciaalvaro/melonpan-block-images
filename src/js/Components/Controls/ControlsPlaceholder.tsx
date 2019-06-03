const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.blockEditor;

interface Props extends BlockPropsWithSetAttributes {
	setImages: Function;
}

export const ControlsPlaceholder: React.ComponentType<Props> = props => {
	const { setImages, attributes } = props;
	const { images, images_id } = attributes;
	const has_images = images && !!images.length;

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
			onSelect={images => setImages(images)}
			value={has_images ? images_id : undefined}
		/>
	);
};
