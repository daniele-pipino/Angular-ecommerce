export class Product {
  constructor(
    public _id: number,
    public name: string,
    public cover: string,
    public description: string,
    public price: number,
    public category: string
  ) {}
}
