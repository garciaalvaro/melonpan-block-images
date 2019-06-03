import { useIsFirstRender } from "./useIsFirstRender";

const { isEqual } = lodash;
const { useState, useRef, useEffect } = wp.element;

export const useHasChanged = (prop: any) => {
	const previous_prop = useRef(prop);
	const [counter, setCounter] = useState(0);
	const is_first_render = useIsFirstRender();

	useEffect(() => {
		if (is_first_render || isEqual(previous_prop.current, prop)) {
			return;
		}

		setCounter(counter => counter + 1);

		previous_prop.current = prop;
	}, [prop]);

	return counter;
};
