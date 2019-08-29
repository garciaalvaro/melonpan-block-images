import { addPrefix } from "utils/tools";

const { __ } = wp.i18n;
const { RadioControl } = wp.components;
const { useCallback } = wp.element;

export const ControlLayout: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { layout } = attributes;
	const onChange = useCallback(
		(layout: Attributes["layout"]) => setAttributes({ layout }),
		[]
	);

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
