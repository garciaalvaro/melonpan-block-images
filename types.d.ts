// Console log shortcut
declare const l: Function;

interface Object {
	[key: string]: any;
}

interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
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

interface Attributes {
	id: string;
	slider_dot_color: string;
	images_id: number[];
	images: Image[];
	separation: number;
	layout: "horizontal" | "vertical" | "slider";
	fixed_dimension: "height" | "width";
	cover: boolean;
	cover_ratio: number;
	responsive: boolean;
	slider_id: string;
}

interface EditProps {
	className: string;
	attributes: Attributes;
	setAttributes: Function;
}

interface EditPropsExtended extends EditProps {
	container_ratio: number;
}

interface SaveProps {
	attributes: Attributes;
}

interface SavePropsExtended extends SaveProps {
	container_ratio: number;
}
