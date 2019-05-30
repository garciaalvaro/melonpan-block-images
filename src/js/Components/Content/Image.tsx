import l, { Div, Figure, Figcaption, Img } from "utils";

interface Props {
	image: Image;
	layout: Attributes["layout"];
	fixed_dimension: Attributes["fixed_dimension"];
	cover: Attributes["cover"];
	cover_ratio: Attributes["cover_ratio"];
	separation: Attributes["separation"];
	images_length?: number;
	container_ratio?: number;
}

const Image: React.ComponentType<Props> = props => {
	const {
		layout,
		fixed_dimension,
		cover,
		cover_ratio,
		image,
		container_ratio,
		images_length
	} = props;

	return (
		<Figure
			classes="figure"
			style={{
				flex:
					layout === "horizontal" &&
					fixed_dimension === "height" &&
					cover === false &&
					images_length &&
					images_length > 1
						? `${image.ratio} 1`
						: null
			}}
		>
			<Div
				classes="image-container"
				style={{
					paddingBottom:
						cover && cover_ratio
							? `${100 / cover_ratio}%`
							: container_ratio
							? `${100 / container_ratio}%`
							: null
				}}
			>
				{cover && (
					<Div
						classes="image-bg_image"
						style={{
							backgroundImage: `url(${image.url})`
						}}
					/>
				)}
				<Img
					classes="image"
					alt={image.alt}
					src={image.url}
					sizes="100vw"
					srcSet={image.srcset}
					data-id={image.id}
					data-link={image.link}
					data-ratio={image.ratio}
				/>
			</Div>

			{image.caption && (
				<Figcaption classes="figcaption">{image.caption}</Figcaption>
			)}
		</Figure>
	);
};

export default Image;
