import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { addPrefix } from "utils/tools";

export const ControlSeparation: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { layout, separation } = attributes;
	const onChange = (separation: Attributes["separation"]) =>
		setAttributes({ separation });

	return (
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
			value={separation || 0}
			min={0}
			max={100}
			step={1}
			onChange={onChange}
		/>
	);
};
