import { Div } from "utils/components";
import { Image } from "./Image";
import { Slider } from "./Slider";

const { isUndefined } = lodash;

export const Container: React.ComponentType<BlockProps> = props => {
	const { attributes } = props;
	const {
		layout,
		fixed_dimension,
		cover,
		cover_ratio,
		separation,
		images,
		responsive
	} = attributes;

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
