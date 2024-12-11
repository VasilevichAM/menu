import { dishesT, ordersT } from "./types";

export const restorants = [
  {
    id: 1,
    name: "Oven",
    type: "Italian",
    city: "City 1",
    address: "Address 1",
    phone: "123456789",
    email: "email@email.com",
    currency: "EUR",
    language: "et",
    image:
      "https://optim.tildacdn.com/tild3233-3731-4365-b166-366333666635/-/resize/960x/-/format/webp/restaurant-projectio.jpg",
    // logo: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/400w/canva-yellow-abstract-cooking-fire-free-logo-8iEUG5R0yQ4.jpg",
    // location: "44.812619, 20.424597",
    rating: 4.8,
    dishesGroup: [
      { id: 1, name: "Group 1" },
      { id: 2, name: "Group 2" },
      { id: 3, name: "Group 3" },
      { id: 4, name: "Group 4" },
      { id: 5, name: "Group 5" },
      { id: 6, name: "Group 6" },
    ],
    info: "Исполнитель (продавец): ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСВЕННОСТЬЮ МУЛЬТИКУХНЯ, 123123123, 123213123, Москва, ул Авиаконструктора, д12, ИНН 777456345634, рег номер 12344241234434",
  },
  {
    id: 2,
    name: "Арарат",
    type: "Russian",
    city: "City 2",
    address: "Address 2",
    phone: "223456789",
    email: "email@email.com",
    currency: "RUB",
    language: "ru",
    image:
      "https://static.tildacdn.com/tild3661-3133-4863-a265-383965306461/IMG_6103.jpg",
    logo: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/400w/canva-yellow-abstract-cooking-fire-free-logo-8iEUG5R0yQ4.jpg",
    location: "41.812619, 21.424597",
    rating: 4.4,
    dishesGroup: [
      { id: 1, name: "Group 0" },
      { id: 2, name: "Group 12" },
      { id: 3, name: "Group 32" },
      { id: 4, name: "Group 43" },
      { id: 5, name: "Group 45" },
      { id: 6, name: "Group 65" },
    ],
  },
];

// TODO: для слайдера с предложениями для клиентов, надо продумать
// export const restorantsInfo = {
//   restorantId: 1,
//   data: [
//     {
//       image:
//         "https://static.tildacdn.com/tild3661-3133-4863-a265-383965306461/IMG_6103.jpg",
//       title: "Image",
//       description: "Description 1",
//     },
//   ],
// };

export const dishesGroup = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
  { id: 5, name: "Group 5" },
  { id: 6, name: "Group 6" },
];

export const dishes: dishesT[] = [
  {
    id: 1,
    restorantId: 1,
    name: "Dish",
    price: 100000,
    weight: 300,
    description: "Description 1",
    image:
      "https://aif-s3.aif.ru/images/015/573/91c0d7c133aa580e0c368bb536b053a1.jpg",
    range: 5,

    compound:
      "compound, compound, compound, compound, compound, compound, compound, compound",
    groupId: 1,
  },
  {
    id: 2,
    restorantId: 1,
    name: "Dish dish dish dish dish dish dish dish dish dish",
    price: 10,
    weight: 300,
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
    name: "Dish",
    price: 10,
    weight: 300,
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
    weight: 300,
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
    weight: 300,
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
    weight: 300,
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
    weight: 300,
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
    weight: 300,
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
    weight: 300,
    description: "Description 2",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 3,
  },
];

export const orders: ordersT[] = [
  {
    table: "1",
    userId: 666,
    order: [
      { id: 1, count: 2 },
      { id: 3, count: 3 },
    ],
    total: 2200,
    time: "12:00:00",
  },
  {
    table: "3",
    userId: 666,
    order: [
      { id: 2, count: 1 },
      { id: 4, count: 1 },
    ],
    total: 200,
    time: "12:30:00",
  },
  {
    table: "5",
    userId: 666,
    order: [{ id: 1, count: 2 }],
    total: 2000,
    time: "13:00:00",
  },
];

export const group_dishes = [
  { id: 1, name: "Group Dish 1" },
  { id: 2, name: "Group Dish 2" },
  { id: 3, name: "Group Dish 3" },
];

export const currencies: Record<string, string> = {
  USD: "$",
  RUB: "₽",
  RSD: "din",
  KZT: "₸",
};

// export const currencies = [
//   { currency: "USD", symbol: "$" },
//   { currency: "RUB", symbol: "₽" },
//   { currency: "RSD", symbol: "din" },
//   { currency: "KZT", symbol: "₸" },
// ];

export const languages = [
  { id: "en", name: "English" },
  { id: "ru", name: "Russian" },
  { id: "et", name: "Estonskij" },
  { id: "sr", name: "Srbin" },
  { id: "kz", name: "Kazaksha" },
];
