import l, { Div } from "utils";
import Image from "./Image";
import Slider from "./Slider";

const { isUndefined } = lodash;

const Container: React.ComponentType<Edit | Save> = props => {
	const {
		layout,
		fixed_dimension,
		cover,
		cover_ratio,
		separation,
		images,
		responsive
	} = props.attributes;

	return (
		<Div
			classes={[
				"images",
				`layout-${layout}`,
				`fixed_dimension-${fixed_dimension}`,
				cover ? "cover" : null,
				responsive ? "responsive" : null
			]}
			style={{
				fontSize: !isUndefined(separation) ? separation / 2 : null
			}}
		>
			{images &&
				layout !== "slider" &&
				images.map((image, index) => (
					<Image
						key={index}
						image={image}
						layout={layout}
						fixed_dimension={fixed_dimension}
						cover={cover}
						cover_ratio={cover_ratio}
						separation={separation}
						images_length={images.length}
					/>
				))}
			{images && layout === "slider" && <Slider {...props} />}
		</Div>
	);
};

export default Container;
