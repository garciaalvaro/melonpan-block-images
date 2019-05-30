import l from "utils";

const { select, dispatch } = wp.data;
const categories: Object[] = select("core/blocks").getCategories();

if (categories && !categories.find(({ slug }) => slug === "melonpan")) {
	const categories_new = [
		...categories,
		{
			slug: "melonpan",
			title: "Melonpan Blocks",
			icon: null
		}
	];

	// Set the new category.
	dispatch("core/blocks").setCategories(categories_new);
}
