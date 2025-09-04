export default interface MovieInterface {
  readonly id: number;
  readonly name: string;
  readonly country: string;
  readonly genre: string;
  readonly duration: string;
  readonly price: number;
  readonly slogan?: string;
}
