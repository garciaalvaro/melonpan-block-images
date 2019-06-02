import addPrefix from "./addPrefix";

const icons = {
	block: (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<rect
				width="5"
				height="12"
				x="0"
				y="6"
				className={addPrefix("icon-rect-1")}
			/>
			<rect
				width="8"
				height="12"
				x="5"
				y="6"
				className={addPrefix("icon-rect-2")}
			/>
			<rect
				width="11"
				height="12"
				x="13"
				y="6"
				className={addPrefix("icon-rect-3")}
			/>
		</svg>
	)
};

export default icons;
