import { __ } from "@wordpress/i18n";
import { MediaPlaceholder } from "@wordpress/block-editor";

interface Props extends EditProps {
	setImages: Function;
}

export const Placeholder: React.ComponentType<Props> = props => {
	const { setImages, attributes } = props;
	const { images, images_id } = attributes;
	const has_images = images && !!images.length;
	const onSelect = (images: ImageRaw[]) => setImages(images);

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
			onSelect={onSelect}
			value={has_images ? images_id : undefined}
		/>
	);
};
