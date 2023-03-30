// Product : price, isNew, isSale, title

// Vehicle : wheels, year, brand

// Car: type, model +Product, +Vehicle

type Product = {
  price: number;
  isNew?: boolean;
  isSale?: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  years: Date;
  brand: string;
};

type Car2 = {
  type: string;
  model: string;
} & Product &
  Vehicle;

const car1: Car2 = {
  type: 'hatchback',
  model: 'm4',
  price: 123123,
  title: 'It is crazy car',
  wheels: 4,
  years: new Date(),
  brand: 'bmw',
};

interface IProduct {
  price: number;
  isNew?: boolean;
  isSale?: boolean;
  title: string;
}

interface IVehicle {
  wheels: number | boolean;
  years: Date;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const car3: ICar = {
  type: 'hatchback',
  model: 'm4',
  price: 123123,
  title: 'It is crazy car',
  wheels: 4,
  years: new Date(),
  brand: 'bmw',
};
