import { addPrefix } from "utils/tools";

const { __ } = wp.i18n;
const { RadioControl } = wp.components;
const { useCallback } = wp.element;

export const ControlFixedDimensions: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { fixed_dimension } = attributes;
	const onChange = useCallback(
		(fixed_dimension: Attributes["fixed_dimension"]) =>
			setAttributes({ fixed_dimension }),
		[]
	);

	return (
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
			onChange={onChange}
		/>
	);
};
