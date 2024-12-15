import { ordersT } from "./types";

export const restorants = [
  {
    id: 1,
    name: "Oven cafe",
    type: "Italian",
    city: "City 1",
    address: "Address 1",
    // phone: "123456789",
    // email: "email@email.com",

    currency: "EUR",
    language: "et",
    image: "/mockImage/oven.webp",
    // logo: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/400w/canva-yellow-abstract-cooking-fire-free-logo-8iEUG5R0yQ4.jpg",
    // location: "44.812619, 20.424597",
    // rating: 4.8,
    dishesGroup: [
      {
        id: 9,
        name: "Laste Menüü",
        image: "https://avelon.com.ua/image/data/articles/detskoe-menu-2.jpg",
      },
      {
        id: 1,
        name: "Hommikusöök",
        image:
          "https://cdn.iz.ru/sites/default/files/article-2021-12/Depositphotos_46186255_XL.jpg",
      },
      {
        id: 2,
        name: "Pannkoogid",
        image:
          "https://e1.edimdoma.ru/data/posts/0002/2215/22215-ed4_wide.jpg?1631187134",
      },
      {
        id: 3,
        name: "Eelroad, Salatid",
        image: "https://zira.uz/wp-content/uploads/2023/04/salat-pikantnyy.jpg",
      },
      {
        id: 4,
        name: "Supp",
        image:
          "https://images.viola.ru/7YKavDgVwi8/rs:fit:1200:630:0/g:ce/aHR0cHM6Ly93d3cudmlvbGEucnUvc3RvcmFnZS9hcHAvdXBsb2Fkcy9wdWJsaWMvNjM5LzBjOS9jMjMvNjM5MGM5YzIzMjRmMjMxMzg2NDcxNC5qcGc.png",
      },
      {
        id: 5,
        name: "Pasta",
        image:
          "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-googleFourByThree-v2.jpg",
      },
      {
        id: 6,
        name: "Šnitsel",
        image:
          "https://images.gastronom.ru/SmSO0j3jHRjlRjDjLzA6YYYRLLz1M74PIBlQ4DhiB5M/pr:article-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzM1NTRlNThmLWQ1NzEtNGFkNy05OGJiLWNhODYzMDMxZThiMi5qcGc",
      },
      {
        id: 7,
        name: "Pelmeenid, Vareenikud",
        image:
          "https://img.championat.com/s/732x488/news/big/s/j/kak-pravilno-varit-pelmeni_17277810861348986534.jpg",
      },
      {
        id: 8,
        name: "Leiba",
        image:
          "https://cross.expert/wp-content/uploads/2018/04/Depositphotos_18783003_L.jpg",
      },
      {
        id: 10,
        name: "Joogid",
        image:
          "https://png.klev.club/uploads/posts/2024-04/png-klev-club-0z6x-p-chai-kofe-png-2.png",
      },
      {
        id: 10,
        name: "Kokteilid alkoholivabad",
        image:
          "https://ss.sport-express.ru/userfiles/materials/179/1792096/volga.jpg",
      },
      {
        id: 11,
        name: "Joogid Alkohoolsed",
        image:
          "https://dobro.wine/upload/iblock/3d2/3d24fa06da715538313a0546388514f1.jpg",
      },
    ],
    dishes: [
      // КАША
      {
        id: 1001,
        name: "Puder",
        price: 5.5,
        description: "Pähklitega",
        image:
          "https://cdn-s-static.catery.ru/storage/menu/item/1/2/4/3/124336/preview_preview_image-c-5G_hhcHiHdnUKNzOOcAw9QRmv6KlQNEw.jpg",
        compound: " ",
        groupId: [1],
      },
      {
        id: 1002,
        name: "Puder",
        price: 5,
        description: "Moosiga",
        image:
          "https://api.syrovarnya.com/sites/default/files/styles/image_690x690/public/catalog/400003493.jpg?itok=IEhHDeB3",
        compound: " ",
        groupId: [1],
      },
      // ОМЛЕТ
      {
        id: 1003,
        name: "Omlett",
        price: 5.5,
        description: "Tomati, pesto ja mozzarellaga",
        image: "https://r5.mt.ru/r19/photoB08D/20638085315-0/jpg/bp.webp",
        compound: "",
        groupId: [1],
      },
      {
        id: 1004,
        name: "Omlett",
        price: 6,
        description: "Singi ja juustuga",
        image:
          "https://thierry.by/assets/images/products/101/large/2310-omlet-s-vetchinoi-i-syrom.jpg",

        compound: "",
        groupId: [1],
      },
      // ЯИЧНИЦА
      {
        id: 1005,
        name: "Munapuder",
        price: 8,
        description: "Peekoniga",
        image:
          "https://img.freepik.com/premium-photo/scrambled-egg-with-bread-toasted-bacon-breakfast_1339-113811.jpg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1006,
        name: "Munapuder",
        price: 9,
        description: "soolaforelliga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1007,
        name: "Munapuder",
        price: 6.5,
        description: "Mini-sõrnikud kodutalu kohupiimast",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1008,
        name: "Munapuder",
        price: 5.5,
        description: "Fit hommikusöök",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      // КРУАССАН
      {
        id: 1009,
        name: "Croissant",
        price: 9,
        description: "Soolaforell ja Ceasari kastmega",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1010,
        name: "Croissant",
        price: 7,
        description: "Trühvlimajoneesi kastme ja munapudruga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1011,
        name: "Croissant",
        price: 8,
        description: "Camamberti juustu, pirni ja pistaatsia pähtlidega.",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      {
        id: 1012,
        name: "Croissant",
        price: 7,
        description: "Pistaatsiakreemi ja maasikamoosiga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1],
      },
      // БЛИНЧИКИ
      {
        id: 2001,
        name: "Pannkoogid",
        price: 11,

        description: "Soolaforell, toorjuustu ja punase kalamarjaga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2],
      },
      {
        id: 2002,
        name: "Pannkoogid",
        price: 7,

        description: "Singi-juustu",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2],
      },
      {
        id: 2003,
        name: "Pannkoogid",
        price: 7,

        description: "Nutella-banaani",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2],
      },
      {
        id: 2004,
        name: "Pannkoogid",
        price: 5.5,

        description: "Moos/ Kondenspiim/ Hapukoor",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2],
      },
      // Салат
      {
        id: 3001,
        name: "Salatid",
        price: 8,

        description: "Bruschetta trio",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound:
          "tomati salsa, kitsejuust ja karameliseeritud punane sibul, peedi hummus",
        groupId: [3],
      },
      {
        id: 3002,
        name: "Caesari Salat",
        price: 8,

        description: "Kanafileega",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [3],
      },
      {
        id: 3003,
        name: "Caesari Salat",
        price: 9.5,

        description: "Krevettidega",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [3],
      },
      {
        id: 3004,
        name: "Caesari Salat",
        price: 9.5,

        description: "Soolaforelliga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [3],
      },
      // СУП
      {
        id: 4001,
        name: "Supp",
        price: 6,

        description: "Kõrvitsa-suitsujuustu supp",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [4],
      },
      {
        id: 4002,
        name: "Supp",
        price: 6,

        description: "Borš pardilihaga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [4],
      },
      // Паста
      {
        id: 5001,
        name: "Pasta",
        price: 8.5,

        description: "Carbonara",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [5],
      },
      {
        id: 5002,
        name: "Pasta",
        price: 8,

        description: "Pesto",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [5],
      },
      {
        id: 5003,
        name: "Pasta",
        price: 9,

        description: "Kanafileega",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [5],
      },
      {
        id: 5004,
        name: "Pasta",
        price: 9.5,

        description: "Krevettidega",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [5],
      },
      // Šnitsel
      {
        id: 6001,
        name: "Kanašnitsel ja Ceasari kastmega",
        price: 11,

        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [6],
      },
      {
        id: 6002,
        name: "Kanašnitsel ananassi ja juustuga",
        price: 11,

        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [6],
      },
      // ПЕЛЬМЕНИ
      {
        id: 7001,
        name: "Kodused pelmeenid hakklihaga",
        price: 8,
        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [7],
      },
      {
        id: 7002,
        name: "Kodused vareenikud kartuli-ja seentega",
        price: 8,
        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [7],
      },
      // ХЛЕБ
      {
        id: 8001,
        name: "Ciabatta küüslauguvõiga.",
        price: 3,
        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [8],
      },
      {
        id: 8002,
        name: "Croissant võiga",
        price: 3,
        description: "",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [8],
      },
      // Детское меню
      {
        id: 9001,
        name: "Pannkoogid",
        price: 5,
        description: "singi-juustuga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2, 9],
      },
      {
        id: 9002,
        name: "Pannkoogid",
        price: 3,
        description: "moosiga või kondenspiimaga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [2, 9],
      },

      {
        id: 9003,
        name: "Pasta",
        price: 5,
        description: "singi ja juustuga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [5, 9],
      },
      {
        id: 9004,
        name: "Omlett",
        price: 3,
        description: "moosiga või kondenspiimaga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [1, 9],
      },
      {
        id: 9005,
        name: "Pelmeenid",
        price: 5,
        description: "singi-juustuga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [9, 7],
      },
      {
        id: 9006,
        name: "Kokteilid",
        price: 5.5,
        description: "Maasika piimakokteil suhkruvatiga",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [10, 9],
      },
      {
        id: 9007,
        name: "Kokteilid",
        price: 5,
        description: "Vanilli jäätisekokteil",
        image:
          "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
        compound: "",
        groupId: [9, 10],
      },
    ],
    info: "Исполнитель (продавец): ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСВЕННОСТЬЮ МУЛЬТИКУХНЯ, 123123123, 123213123, Москва, ул Авиаконструктора, д12, ИНН 777456345634, рег номер 12344241234434",
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
  EUR: "€",
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
