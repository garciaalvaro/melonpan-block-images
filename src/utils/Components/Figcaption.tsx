import { prepareProps } from "utils/tools/prepareProps";

export const Figcaption: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <figcaption {...prepareProps(rest)}>{children}</figcaption>;
};
