import { prepareProps } from "utils/tools/prepareProps";

export const Figure: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <figure {...prepareProps(rest)}>{children}</figure>;
};
