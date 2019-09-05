import { InspectorControls } from "@wordpress/block-editor";

import { Div } from "utils/Components";
import { ControlMediaUpload } from "./ControlMediaUpload";
import { ControlLayout } from "./ControlLayout";
import { ControlSeparation } from "./ControlSeparation";
import { ControlFixedDimensions } from "./ControlFixedDimensions";
import { ControlCover } from "./ControlCover";
import { ControlSliderDot } from "./ControlSliderDot";
import { ControlResponsive } from "./ControlResponsive";

interface Props extends EditProps {
	setImages: Function;
}

export const Controls: React.ComponentType<Props> = props => {
	const { attributes } = props;
	const { layout } = attributes;

	return (
		<InspectorControls>
			<Div id="controls">
				<ControlMediaUpload {...props} />
				<ControlLayout {...props} />
				<ControlSeparation {...props} />

				{layout && ["slider", "horizontal"].includes(layout) && (
					<ControlFixedDimensions {...props} />
				)}

				<ControlCover {...props} />

				{layout && ["slider"].includes(layout) && (
					<ControlSliderDot {...props} />
				)}

				{layout && ["horizontal", "slider"].includes(layout) && (
					<ControlResponsive {...props} />
				)}
			</Div>
		</InspectorControls>
	);
};
