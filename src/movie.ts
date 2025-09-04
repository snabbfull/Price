import ForWatching from "./ForWatching";

export default class Movie implements ForWatching {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly country: string,
    readonly slogan?: string,
    readonly genre: string,
    readonly duration: string,
    readonly price: number,
  ) {}
}