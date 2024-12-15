import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  ru: {
    dish: {
      order: "Заказ",
      compound: "Состав",
      description: "Описание",
      total: "Итого",
      orderFood: "Заказать",
      comments: "Комментарии",
      waiter: "Официант",
      rating: "Рейтинг",
      averageBill: "Средний чек",
      favorites: "Избранное",
      orderHistory: "История заказов",
      search: "Поиск",
      info: "О нас",
    },
  },
  en: {
    dish: {
      order: "Order",
      compound: "Compound",
      description: "Description",
      total: "Total",
      orderFood: "Order",
      comments: "Comments",
      waiter: "Waiter",
      rating: "Rating",
      averageBill: "Average bill",
      favorites: "Favorites",
      orderHistory: "Order history",
      search: "Search",
      info: "О нас",
    },
  },
  bs: {
    dish: {
      order: "Наредити",
      compound: "Састав",
      description: "Опис",
      total: "Тотално",
      orderFood: "Наредити",
      comments: "Коментари",
      waiter: "Официант",
      rating: "Процена",
      averageBill: "Просечан рачун",
      favorites: "Фаворити",
      orderHistory: "Историја налога",
      search: "Тражити",
      info: "О нас",
    },
  },
  et: {
    dish: {
      order: "Tellimus",
      compound: "Ühend",
      description: "Kirjeldus",
      total: "Kogusumma",
      orderFood: "Tellimus",
      comments: "Kommentaarid",
      waiter: "Külastaja",
      rating: "Hinnang",
      averageBill: "Average bill",
      favorites: "Favorites",
      orderHistory: "Tellimuste ajalugu",
      search: "Otsima",
      info: "О нас",
    },
  },
  ////////////////////////////////////
};

const userLenght = window.navigator.language.slice(0, 2);

i18n.use(initReactI18next).init({
  resources,
  lng: userLenght,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
