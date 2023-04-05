interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'sedan',
  name: 'X3',
};

const car2: Car = {
  wheels: 4,
  brand: 'Mazda',
  type: 'sedan',
  name: '6MPS',
};

car2.go = true;
