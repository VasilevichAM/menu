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
      rating: "Hinnang",
      averageBill: "Average bill",
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
