import tinycolor from "tinycolor2";

import { Div, Span } from "utils/Components";
import { addPrefix } from "utils/tools";

const { isUndefined } = lodash;
const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { ColorPalette } = wp.blockEditor;
const { useCallback } = wp.element;

export const ControlSliderDot: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { slider_dot_color } = attributes;
	const onChange = useCallback(
		(color: string) =>
			setAttributes({ slider_dot_color: isUndefined(color) ? "" : color }),
		[]
	);

	return (
		<BaseControl
			id={addPrefix("slider_dot_color")}
			label={<Span>{__("Slider dot color")}</Span>}
			className={addPrefix([
				"control-container",
				"control",
				"control-color",
				"slider_dot_color"
			])}
		>
			<Div
				className={[
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
					// @ts-ignore
					value={slider_dot_color || ""}
					// @ts-ignore
					onChange={onChange}
				/>
			</Div>
		</BaseControl>
	);
};
