import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";

import "./ControlMediaUpload.styl";
import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

interface Props extends EditProps {
	setImages: Function;
}

export const ControlMediaUpload: React.ComponentType<Props> = props => {
	const { attributes, setImages } = props;
	const { images_id, images } = attributes;
	const render = ({ open }: Object) => (
		<Button onClick={open} className={addPrefix("edit_images")}>
			{__("Edit images")}
		</Button>
	);
	const onSelect = (images: ImageRaw[]) => setImages(images);

	return (
		<Div className="control-container">
			<MediaUpload
				allowedTypes={["image"]}
				multiple={true}
				value={images_id}
				onSelect={onSelect}
				render={render}
				addToGallery={images && !!images.length}
				gallery={true}
			/>
		</Div>
	);
};
