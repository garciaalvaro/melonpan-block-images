import { Div, Figure, Figcaption, Img } from "utils/Components";

interface Props
	extends Pick<
		Attributes,
		"layout" | "fixed_dimension" | "cover" | "cover_ratio" | "separation"
	> {
	image: Image;
	images_length?: number;
	container_ratio?: number;
}

export const Image: React.ComponentType<Props> = props => {
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
			className="figure"
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
				className="image-container"
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
						className="image-bg_image"
						style={{
							backgroundImage: `url(${image.url})`
						}}
					/>
				)}
				<Img
					className="image"
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
				<Figcaption className="figcaption">{image.caption}</Figcaption>
			)}
		</Figure>
	);
};
