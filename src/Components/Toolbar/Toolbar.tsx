import { __ } from "@wordpress/i18n";
import { IconButton, Toolbar as WpToolbar } from "@wordpress/components";
import { MediaUpload, BlockControls } from "@wordpress/block-editor";

interface Props extends EditProps {
	setImages: Function;
}

export const Toolbar: React.ComponentType<Props> = props => {
	const { attributes, setImages } = props;
	const { images_id, images } = attributes;
	const render = ({ open }: Object) => (
		<IconButton label={__("Edit images")} icon="edit" onClick={open} />
	);
	const onSelect = (images: ImageRaw[]) => setImages(images);

	return (
		<BlockControls>
			<WpToolbar>
				<MediaUpload
					allowedTypes={["image"]}
					multiple={true}
					value={images_id}
					onSelect={onSelect}
					render={render}
					addToGallery={images && !!images.length}
					gallery={true}
				/>
			</WpToolbar>
		</BlockControls>
	);
};
