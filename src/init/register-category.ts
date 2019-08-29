import { block_category } from "utils/data";

type Category = import("wordpress__blocks/api/categories").Category;

const { __ } = wp.i18n;
const { select, dispatch } = wp.data;
const categories: Category[] = select("core/blocks").getCategories();

// If the categories array exists and "melonpan" hasn't been added yet
if (categories && !categories.find(({ slug }) => slug === block_category)) {
	// Add the new category
	dispatch("core/blocks").setCategories([
		...categories,
		{
			slug: block_category,
			title: __("Melonpan Blocks"),
			icon: null
		}
	]);
}
