import { ListingItem } from "@app/_core/models/listing-item";
import { NO_FOOD_WASTE_DATA } from "./no-food-waste.const";
import { RECENTLY_ADDED_DATA } from "./recently-added.const";

export const LISTING_DATA: ListingItem[] = [
    ...NO_FOOD_WASTE_DATA,
    ...RECENTLY_ADDED_DATA
]