export type dishesT = {
  id: number;
  restorantId: number;
  name: string;
  price: number;
  weight: number;
  description: string;
  image: string;
  range: number;
  compound: string;
  groupId: number;
  quantity?: number;
};
export type cartT = dishesT & {
  quantity: number;
};

export type restorantsT = {
  id: 1;
  name: string;
  type: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  currency: string;
  language: string;
  image: string;
  logo?: string;
  location?: string;
  range?: 4.8;
};

export type ordersT = {
  table: string;
  userId: number;
  order: { id: number; count: number }[];
  total: number;
  time: string;
  status?: number; // 0 - новый заказ, 1 - заказ оплачен, 2 - заказ отменен
};
