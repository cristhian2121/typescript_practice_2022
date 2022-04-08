/**
 * The main difference betweend interface and type
 * is that the interfaces can extend and the types no
 */

type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
