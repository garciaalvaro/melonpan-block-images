import { __, sprintf } from "@wordpress/i18n";
import {
	BaseControl,
	ToggleControl,
	RangeControl
} from "@wordpress/components";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

export const ControlCover: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { cover, cover_ratio } = attributes;
	const onChangeCover = (cover: Attributes["cover"]) =>
		setAttributes({ cover });
	const onChangeCoverRatio = (cover_ratio: Attributes["cover_ratio"]) =>
		setAttributes({ cover_ratio });

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("cover")}
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
					onChange={onChangeCover}
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
				help={sprintf(__("value > 1 = landscape%svalue < 1 = portrait"), "\n")}
				value={cover_ratio || 1}
				min={0.5}
				max={2}
				step={0.05}
				onChange={onChangeCoverRatio}
			/>
		</Div>
	);
};
