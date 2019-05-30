declare interface Image {
	url: string;
	link: string;
	alt: string;
	id: number;
	caption: string;
	ratio: string;
	srcset: string;
}

declare interface Attributes {
	id: string | undefined;
	slider_dot_color: string | undefined;
	images_id: number[] | undefined;
	images: Image[] | undefined;
	separation: number | undefined;
	layout: "horizontal" | "vertical" | "slider" | undefined;
	fixed_dimension: "height" | "width" | undefined;
	cover: boolean | undefined;
	cover_ratio: number | undefined;
	responsive: boolean | undefined;
	slider_id: string | undefined;
}

declare interface Edit extends Object {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}

declare interface Save extends Object {
	attributes: Attributes;
}
