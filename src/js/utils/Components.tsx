import addPrefix from "./addPrefix";

interface Props extends Object {
	children?: React.ReactNode;
	id?: string | null;
	classes?: string | (string | null)[];
}
interface HTMLProps extends Props {
	html_tag: string;
}

const Div: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="div" />
);
const Span: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="span" />
);
const Figure: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="figure" />
);
const Figcaption: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="figcaption" />
);
const Ul: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="ul" />
);
const Li: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="li" />
);
const InputRadio: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="input_radio" />
);
const Label: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="label" />
);
const Img: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="img" />
);

const HTML: React.ComponentType<HTMLProps> = props_raw => {
	const { children, id, classes = [], html_tag, ...rest } = props_raw;

	const props = {
		id: id ? addPrefix(id) : undefined,
		className: classes && classes.length ? addPrefix(classes) : undefined,
		...rest
	};

	switch (html_tag) {
		case "div":
			return <div {...props}>{children}</div>;
			break;

		case "span":
			return <span {...props}>{children}</span>;
			break;

		case "figure":
			return <figure {...props}>{children}</figure>;
			break;

		case "figcaption":
			return <figcaption {...props}>{children}</figcaption>;
			break;

		case "ul":
			return <ul {...props}>{children}</ul>;
			break;

		case "li":
			return <li {...props}>{children}</li>;
			break;

		case "input_radio":
			return <input type="radio" {...props} />;
			break;

		case "label":
			return <label {...props}>{children}</label>;
			break;

		case "img":
			return <img {...props} />;
			break;

		default:
			return null;
			break;
	}
};

export { Div, Span, Figure, Figcaption, Ul, Li, InputRadio, Label, Img };
