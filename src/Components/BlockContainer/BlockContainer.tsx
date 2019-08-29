import { Div } from "utils/Components";
import { Image } from "../Image/Image";
import { Slider } from "../Slider/Slider";

const { isUndefined } = lodash;

export const BlockContainer: React.ComponentType<
	EditPropsExtended | SavePropsExtended
> = props => {
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
			className={[
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
