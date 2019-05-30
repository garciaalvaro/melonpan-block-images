import uuid from "uuid/v4";
import l, { Div, InputRadio, Label, addPrefix } from "utils";
import Image from "./Image";

const { noop } = lodash;
const { Component, Fragment } = wp.element;

class Slider extends Component<Edit | Save> {
	componentDidMount() {
		const { attributes, setAttributes } = this.props;
		const { id } = attributes;

		if (id) {
			return;
		}

		setAttributes({ id: uuid() });
	}

	render() {
		const {
			layout,
			fixed_dimension,
			cover,
			cover_ratio,
			separation,
			images,
			id,
			slider_dot_color
		} = this.props.attributes;
		let container_ratio = 0;

		if (!id || !images) {
			return null;
		}

		if (images && !cover) {
			images.forEach(image => {
				const image_ratio = parseFloat(image.ratio);

				container_ratio = container_ratio === 0 ? image_ratio : container_ratio;

				if (fixed_dimension === "height") {
					container_ratio = Math.max(image_ratio, container_ratio);
				} else {
					container_ratio = Math.min(image_ratio, container_ratio);
				}
			});
		}

		container_ratio = Math.max(container_ratio * 1000) / 1000;

		return (
			<Fragment>
				{images.length > 1 &&
					images.map((image, index) => (
						<InputRadio
							key={index}
							name={id}
							classes={"slider-input"}
							id={`#${id}-${index.toString()}`}
							value={addPrefix(index.toString())}
							checked={index === 0}
							onChange={noop}
						/>
					))}

				<Div classes="slider-images">
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
					<Div classes="slider-navigation" style={{ color: slider_dot_color }}>
						{images.map((image, index) => (
							<Label
								key={index}
								classes={"slider-dot"}
								htmlFor={`${id}-${index.toString()}`}
							/>
						))}
					</Div>
				)}
			</Fragment>
		);
	}
}

export default Slider;
