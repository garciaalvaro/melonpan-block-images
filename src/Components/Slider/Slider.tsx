import { noop } from "lodash";
import { Fragment } from "@wordpress/element";

import "./Slider.styl";
import { Div, InputRadio, Label } from "utils/Components";
import { addPrefix } from "utils/tools";
import { Image } from "../Image/Image";

export const Slider: React.ComponentType<SavePropsExtended> = props => {
	const { attributes, container_ratio } = props;
	const {
		layout,
		fixed_dimension,
		cover,
		cover_ratio,
		separation,
		images,
		id,
		slider_dot_color
	} = attributes;

	if (!id || !images) {
		return null;
	}

	return (
		<Fragment>
			{images.length > 1 &&
				images.map((image, index) => (
					<InputRadio
						key={index}
						name={id}
						className={"slider-input"}
						id={`!${id}-${index.toString()}`}
						value={addPrefix(index.toString())}
						checked={index === 0}
						onChange={noop}
					/>
				))}

			<Div className="slider-images">
				{images.map((image, index) => (
					<Image
						key={index}
						image={image}
						layout={layout}
						fixed_dimension={fixed_dimension}
						cover={cover}
						cover_ratio={cover_ratio}
						separation={separation}
						container_ratio={container_ratio}
					/>
				))}
			</Div>

			{images.length > 1 && (
				<Div
					className="slider-navigation"
					style={{ color: slider_dot_color || null }}
				>
					{images.map((image, index) => (
						<Label
							key={index}
							className={"slider-dot"}
							htmlFor={`${id}-${index.toString()}`}
						/>
					))}
				</Div>
			)}
		</Fragment>
	);
};
