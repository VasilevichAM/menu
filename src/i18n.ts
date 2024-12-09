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
    },
  },
  en: {
    dish: {
      order: "Order",
      compound: "Compound",
      description: "Description",
      total: "Total",
      orderFood: "Order",
    },
  },
  bs: {
    dish: {
      order: "Наредити",
      compound: "Састав",
      description: "Опис",
      total: "Тотално",
      orderFood: "Наредити",
    },
  },
  et: {
    dish: {
      order: "Tellimus",
      compound: "Ühend",
      description: "Kirjeldus",
      total: "Kogusumma",
      orderFood: "Tellimus",
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
