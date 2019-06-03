interface Props extends BlockPropsWithSetAttributes {
	setImages: Function;
}

const { __ } = wp.i18n;
const { IconButton, Toolbar } = wp.components;
const { MediaUpload, BlockControls } = wp.blockEditor;

export const ControlsToolbar: React.ComponentType<Props> = props => {
	const { attributes, setImages } = props;
	const { images_id, images } = attributes;

	return (
		<BlockControls>
			<Toolbar>
				<MediaUpload
					allowedTypes={["image"]}
					multiple={true}
					value={images_id}
					onSelect={images => setImages(images)}
					render={({ open }: Object) => (
						<IconButton label={__("Edit images")} icon="edit" onClick={open} />
					)}
					addToGallery={images && !!images.length}
					gallery={true}
				/>
			</Toolbar>
		</BlockControls>
	);
};
