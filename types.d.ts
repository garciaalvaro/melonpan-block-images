// Console log shortcut
declare const l: Function;

// Lodash
declare const lodash: typeof import("lodash");

// Wordpress
declare const wp: {
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	data: typeof import("wordpress__data");
	element: typeof import("wordpress__element");
	hooks: typeof import("wordpress__hooks");
	i18n: typeof import("wordpress__i18n");
};

interface Object {
	[key: string]: any;
}

interface BlockProps extends Object {
	attributes: Attributes;
}

interface BlockPropsWithSetAttributes extends BlockProps {
	setAttributes: Function;
}

type ImageSize = {
	width: number;
	height: number;
	url: string;
};

interface ImageRaw {
	id: number;
	alt: string;
	link: string;
	caption: string;
	url: string;
	sizes: {
		full: ImageSize;
		large?: ImageSize;
		medium?: ImageSize;
		thumbnail?: ImageSize;
	};
}

interface Image extends Omit<ImageRaw, "sizes"> {
	ratio: string;
	srcset: string;
	url: string;
}

interface AttributesDefinition
	extends Record<
		| "id"
		| "slider_dot_color"
		| "images_id"
		| "images"
		| "separation"
		| "layout"
		| "fixed_dimension"
		| "cover"
		| "cover_ratio"
		| "responsive"
		| "slider_id",
		any
	> {}

interface Attributes {
	id?: string;
	slider_dot_color?: string;
	images_id?: number[];
	images?: Image[];
	separation?: number;
	layout?: "horizontal" | "vertical" | "slider";
	fixed_dimension?: "height" | "width";
	cover?: boolean;
	cover_ratio?: number;
	responsive?: boolean;
	slider_id?: string;
}
