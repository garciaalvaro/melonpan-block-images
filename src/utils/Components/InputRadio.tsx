import { prepareProps } from "utils/tools/prepareProps";

export const InputRadio: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return (
		<input type="radio" {...prepareProps(rest)}>
			{children}
		</input>
	);
};
