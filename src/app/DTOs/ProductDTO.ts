export class ProductDTO {
  id: string = '';
  name: string = '';
  icon: string = '';
  price: number = 0;
  amount: number = 0;
  date: any = null;
  expirationDate: boolean = true;
  constructor() {
  }

  notEmpty(): boolean {
    return this.name !== '' && this.date !== null
  }
}
