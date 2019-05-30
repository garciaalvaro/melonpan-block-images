import l, { Div, Span, addPrefix } from "utils";
import tinycolor from "tinycolor2";

const { isUndefined } = lodash;
const { __, sprintf } = wp.i18n;
const {
	BaseControl,
	ToggleControl,
	RadioControl,
	RangeControl,
	Button
} = wp.components;
const { InspectorControls, ColorPalette, MediaUpload } = wp.editor;

const ControlsSidebar: React.ComponentType<Edit> = props => {
	const { attributes, setAttributes, setImages } = props;
	const {
		layout,
		fixed_dimension,
		cover,
		cover_ratio,
		separation,
		responsive,
		slider_dot_color,
		images_id,
		images
	} = attributes;

	return (
		<InspectorControls>
			<Div id="controls">
				<Div classes="control-container">
					<MediaUpload
						allowedTypes={["image"]}
						multiple={true}
						value={images_id}
						onSelect={setImages}
						render={({ open }: Object) => (
							<Button onClick={open} className={addPrefix("edit_images")}>
								{__("Edit images")}
							</Button>
						)}
						addToGallery={images && images.length}
						gallery={true}
					/>
				</Div>
				<RadioControl
					className={addPrefix(["control-container", "control", "layout"])}
					label={__("Images layout")}
					selected={layout}
					options={[
						{ value: "vertical", label: "Vertical" },
						{ value: "horizontal", label: "Horizontal" },
						{ value: "slider", label: "Slider" }
					]}
					onChange={(layout: Attributes["layout"]) => setAttributes({ layout })}
				/>

				<RangeControl
					className={addPrefix([
						"control-container",
						"control",
						"control-range",
						"separation"
					])}
					label={__("Images separation [px]")}
					help={
						layout === "slider"
							? __(
									"If the layout type is slider and responsive setting is active, this setting applies when the screen is smaller than 600px in width."
							  )
							: null
					}
					value={separation}
					min={0}
					max={100}
					step={1}
					onChange={(separation: Attributes["separation"]) =>
						setAttributes({ separation })
					}
				/>

				{layout && ["slider", "horizontal"].includes(layout) && (
					<RadioControl
						className={addPrefix([
							"control-container",
							"control",
							"control-radio",
							"fixed_dimension"
						])}
						label={__("Fixed dimension")}
						help={__(
							`Which dimension, width or height, should images share. For example, if "Same height" is selected all images will have the same height but different width.`
						)}
						selected={fixed_dimension}
						options={[
							{ label: "Same height", value: "height" },
							{ label: "Same width", value: "width" }
						]}
						onChange={(fixed_dimension: Attributes["fixed_dimension"]) =>
							setAttributes({ fixed_dimension })
						}
					/>
				)}

				<Div classes="control-container">
					<BaseControl
						className={addPrefix(["control", "cover"])}
						label={__("Cover image")}
					>
						<ToggleControl
							className={addPrefix("control-toggle")}
							label={cover ? __("Active") : __("Not active")}
							checked={cover}
							help={__(
								"If this option is selected the image will have a specific aspect ratio."
							)}
							onChange={(cover: Attributes["cover"]) =>
								setAttributes({
									cover
								})
							}
						/>
					</BaseControl>
					<RangeControl
						className={addPrefix([
							"control",
							"control-range",
							"cover_ratio",
							cover ? "active" : "no-active"
						])}
						label={__("Cover image Ratio")}
						help={sprintf(
							__("value > 1 = landscape%svalue < 1 = portrait"),
							"\n"
						)}
						value={cover_ratio}
						min={0.5}
						max={2}
						step={0.05}
						onChange={(cover_ratio: Attributes["cover_ratio"]) =>
							setAttributes({ cover_ratio })
						}
					/>
				</Div>

				{layout && ["slider"].includes(layout) && (
					<BaseControl
						label={<Span>{__("Slider dot color")}</Span>}
						className={addPrefix([
							"control-container",
							"control",
							"control-color",
							"slider_dot_color"
						])}
					>
						<Div
							classes={[
								"color_palette-container",
								slider_dot_color &&
								tinycolor.isReadable("#fff", slider_dot_color, {
									level: "AA",
									size: "large"
								})
									? "color_dark"
									: "color_light"
							]}
							style={{ color: slider_dot_color }}
						>
							<ColorPalette
								colors={[]}
								value={slider_dot_color}
								onChange={(color: string) =>
									setAttributes({
										slider_dot_color: isUndefined(color) ? "" : color
									})
								}
							/>
						</Div>
					</BaseControl>
				)}

				{layout && ["horizontal", "slider"].includes(layout) && (
					<BaseControl
						className={addPrefix([
							"control-container",
							"control",
							"responsive"
						])}
						label={__("Responsive")}
					>
						<ToggleControl
							className={addPrefix("control-toggle")}
							label={responsive ? __("Active") : __("Not active")}
							checked={responsive}
							help={__(
								"If active, images will be set to Vertical layout when the screen is smaller than 600px in width."
							)}
							onChange={(responsive: Attributes["responsive"]) =>
								setAttributes({
									responsive
								})
							}
						/>
					</BaseControl>
				)}
			</Div>
		</InspectorControls>
	);
};

export default ControlsSidebar;
