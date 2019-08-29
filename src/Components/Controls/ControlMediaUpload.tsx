import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

interface Props extends EditProps {
	setImages: Function;
}

const { __ } = wp.i18n;
const { Button } = wp.components;
const { MediaUpload } = wp.blockEditor;
const { useCallback } = wp.element;

export const ControlMediaUpload: React.ComponentType<Props> = props => {
	const { attributes, setImages } = props;
	const { images_id, images } = attributes;
	const render = useCallback(
		({ open }: Object) => (
			<Button onClick={open} className={addPrefix("edit_images")}>
				{__("Edit images")}
			</Button>
		),
		[]
	);
	const onSelect = useCallback(images => setImages(images), []);

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
