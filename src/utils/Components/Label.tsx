import { prepareProps } from "utils/tools/prepareProps";

export const Label: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <label {...prepareProps(rest)}>{children}</label>;
};
