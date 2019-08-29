export type Icons = Record<"logo", JSX.Element>;

export const icons: Icons = {
	logo: (
		<svg width="18" height="18" viewBox="0 0 100 100">
			<rect width="12" height="80" x="44" y="10" />
			<rect width="40" height="15" x="30" y="10" />
			<rect width="40" height="15" x="30" y="75" />
		</svg>
	)
};
