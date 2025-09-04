import MovieInterface from "./MovieInterface";

export default class Cart {
  private _items: MovieInterface[] = [];

  public add(item: MovieInterface): void {
    this._items.push(item);
  }

  public get items(): MovieInterface[] {
    return [...this._items];
  }

  public getPrice(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  public getDiscountPrice(discount: number): number {
    let price = this._items.reduce((acc, item) => acc + item.price, 0);
    return price * (1 - discount / 100);
  }

  public delete(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
