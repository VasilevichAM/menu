export const restorants = [
  {
    id: 1,
    name: "Restorant 1",
    type: "Italian",
    city: "City 1",
    address: "Address 1",
    phone: "123456789",
    email: "email@email.com",
    currency: "USD",
    language: "en",
    image:
      "https://optim.tildacdn.com/tild3233-3731-4365-b166-366333666635/-/resize/960x/-/format/webp/restaurant-projectio.jpg",
    logo: "image1.jpg",
    location: "44.812619, 20.424597",
    range: 4.8,
  },
  {
    id: 2,
    name: "Restorant 2",
    type: "Russian",
    city: "City 2",
    address: "Address 2",
    phone: "223456789",
    email: "email@email.com",
    currency: "RUB",
    language: "ru",
    image:
      "https://static.tildacdn.com/tild3661-3133-4863-a265-383965306461/IMG_6103.jpg",
    logo: "image1.jpg",
    location: "41.812619, 21.424597",
    range: 4.4,
  },
];

export const dishesGroup = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
  { id: 5, name: "Group 5" },
  { id: 6, name: "Group 6" },
];

export const dishes = [
  {
    id: 1,
    restorantId: 1,
    name: "Dish 1",
    price: 10,
    description: "Description 1",
    image:
      "https://aif-s3.aif.ru/images/015/573/91c0d7c133aa580e0c368bb536b053a1.jpg",
    range: 5,
    compound: "compound",
    groupId: 1,
  },
  {
    id: 2,
    restorantId: 1,
    name: "Dish 2",
    price: 10,
    description: "Description 2",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 1,
  },
  {
    id: 3,
    restorantId: 1,
    name: "Dish 3",
    price: 10,
    description: "Description 3",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 2,
  },
  {
    id: 4,
    restorantId: 1,
    name: "Dish 4",
    price: 10,
    description: "Description 4",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 2,
  },
  {
    id: 5,
    restorantId: 1,
    name: "Dish 5",
    price: 10,
    description: "Description 5",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 2,
  },
  {
    id: 6,
    restorantId: 1,
    name: "Dish 6",
    price: 10,
    description: "Description 6",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 2,
  },
  {
    id: 7,
    restorantId: 1,
    name: "Dish 7",
    price: 10,
    description: "Description 7",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 3,
  },
  {
    id: 8,
    restorantId: 1,
    name: "Dish 11",
    price: 10,
    description: "Description 2",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 3,
  },
  {
    id: 9,
    restorantId: 1,
    name: "Dish 22",
    price: 10,
    description: "Description 2",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 3,
  },
];

export const group_dishes = [
  { id: 1, name: "Group Dish 1" },
  { id: 2, name: "Group Dish 2" },
  { id: 3, name: "Group Dish 3" },
];

export const currencies = [
  { currency: "USD", symbol: "$" },
  { currency: "RUB", symbol: "₽" },
  { currency: "RSD", symbol: "din" },
  { currency: "KZT", symbol: "₸" },
];

export const languages = [
  { id: "en", name: "English" },
  { id: "ru", name: "Russian" },
  { id: "sr", name: "Srbin" },
  { id: "kz", name: "Kazaksha" },
];