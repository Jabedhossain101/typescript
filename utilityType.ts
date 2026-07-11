// utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string
}


// Pick product
type productSummery = Pick<Product, 'id' | 'name' | 'price'>

//Omit product
type ProductWithoutStock = Omit<Product, 'stock' | 'color'>


type productWithColor= Required<Product>

const product: productWithColor = {
  id: 222,
  name: 'Mouse',
  price: '23',
  stock: 23,
  color: 'red'
}

type OptionalProduct = Partial<Product>


type productRead = Readonly<productSummery>


const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 2323,
  name: 'laptop',
  price: '20k'
  
}

export default{}