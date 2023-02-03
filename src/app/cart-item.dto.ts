import { Product } from './products';

export class CartItem extends Product {
  private static itemIndex = -1;
  itemId: number;
  constructor(product: Product) {
    super(product.id, product.name, product.price, product.description);
    this.itemId = ++CartItem.itemIndex;
  }
}
