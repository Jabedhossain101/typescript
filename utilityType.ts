// utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string
}

type productSummery = Pick<Product>

