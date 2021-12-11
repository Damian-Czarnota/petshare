import { RecentlyAddedItem } from "@app/_core/models/recently-added";

export const RECENTLY_ADDED_DATA: RecentlyAddedItem[] = [
  {
    id: '1',
    photo: "dog_food.png",
    isFavourite: false,
    isNew: true,
    location: "Warsaw",
    distance: 2,
    name: "Dog food 25kg",
    price: 15,
    user: 'Kate'
  },
  {
    id: '2',
    photo: "dog_blanket.png",
    isFavourite: false,
    isNew: true,
    location: "Warsaw",
    distance: 2,
    name: "Blankets",
    price: 0,
    user: 'Kate'
  },
  {
    id: '3',
    photo: "dog_blanket.png",
    isFavourite: false,
    isNew: true,
    location: "Warsaw",
    distance: 2,
    name: "Blankets",
    price: 15,
    user: 'Kate'
  },
  {
    id: '4',
    photo: "dog_food.png",
    isFavourite: false,
    isNew: false,
    location: "Warsaw",
    distance: 2,
    name: "Dog food 10kg",
    price: 15,
    user: 'Kate'
  },
];
