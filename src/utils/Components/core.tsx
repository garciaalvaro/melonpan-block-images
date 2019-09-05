import { Fragment } from "@wordpress/element";

import { icons, Icons } from "utils/data/icons";
import { addPrefix } from "utils/tools/addPrefix";

interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	classes?: string | (string | null)[];
}

export interface HTMLProps extends ComponentProps {
	html_tag: string;
}

interface IconProps {
	icon: keyof Icons;
}

export const Icon: React.ComponentType<IconProps> = props => (
	<Fragment>{icons[props.icon] ? icons[props.icon] : null}</Fragment>
);

export const Div: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="div" />
);

export const Span: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="span" />
);

export const Button: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="button" />
);

export const Figure: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="figure" />
);

export const Figcaption: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="figcaption" />
);

export const Ul: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="ul" />
);

export const Li: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="li" />
);

export const InputRadio: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="input_radio" />
);

export const Label: React.ComponentType<ComponentProps> = props => (
	<HTML {...props} html_tag="label" />
);

export const Img: React.ComponentType<ComponentProps> = props => (
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

		case "button":
			return (
				<button type="button" {...props}>
					{children}
				</button>
			);
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
