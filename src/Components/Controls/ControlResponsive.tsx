import { __ } from "@wordpress/i18n";
import { BaseControl, ToggleControl } from "@wordpress/components";

import { addPrefix } from "utils/tools";

export const ControlResponsive: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { responsive } = attributes;
	const onChange = (responsive: Attributes["responsive"]) =>
		setAttributes({ responsive });

	return (
		<BaseControl
			id={addPrefix("responsive")}
			className={addPrefix(["control-container", "control", "responsive"])}
			label={__("Responsive")}
		>
			<ToggleControl
				className={addPrefix("control-toggle")}
				label={responsive ? __("Active") : __("Not active")}
				checked={responsive}
				help={__(
					"If active, images will be set to Vertical layout when the screen is smaller than 600px in width."
				)}
				onChange={onChange}
			/>
		</BaseControl>
	);
};
