import tinycolor from "tinycolor2";
import { isUndefined } from "lodash";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { BaseControl, ColorIndicator } from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";

import "./ControlSliderDot.styl";
import { Div, Span } from "utils/Components";
import { addPrefix } from "utils/tools";

export const ControlSliderDot: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { slider_dot_color } = attributes;
	const onChange = (color: string) =>
		setAttributes({ slider_dot_color: isUndefined(color) ? "" : color });

	return (
		<BaseControl
			id={addPrefix("slider_dot_color")}
			label={
				<Fragment>
					<Span>{__("Slider dot color")}</Span>
					<ColorIndicator colorValue={slider_dot_color} />
				</Fragment>
			}
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
