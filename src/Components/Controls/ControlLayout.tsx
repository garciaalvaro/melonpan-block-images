import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { addPrefix } from "utils/tools";

export const ControlLayout: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { layout } = attributes;
	const onChange = (layout: Attributes["layout"]) => setAttributes({ layout });

	return (
		<RadioControl
			className={addPrefix(["control-container", "control", "layout"])}
			label={__("Images layout")}
			selected={layout}
			options={[
				{ value: "vertical", label: "Vertical" },
				{ value: "horizontal", label: "Horizontal" },
				{ value: "slider", label: "Slider" }
			]}
			onChange={onChange}
		/>
	);
};
