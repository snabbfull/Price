import Movie from "../movie";
import Cart from "../cart";

test("Добавление фильма в корзину", () => {
  const myMovie = new Movie(
    100,
    "Интерстеллар",
    "США",
    "Только вперед",
    "Фантастика",
    "180 мин.",
    2000
  );

  const myCart = new Cart();

  myCart.add(myMovie);

  const result = [
    {
      id: 100,
      name: "Интерстеллар",
      country: "США",
      slogan: "Только вперед",
      genre: "Фантастика",
      duration: "180 мин.",
      price: 2000
    },
  ];

  expect(result).toEqual(myCart.items);
});

test("Получение цены из корзины (без скидок)", () => {
  const myMovie1 = new Movie(
    100,
    "Интерстеллар",
    "США",
    "Только вперед",
    "Фантастика",
    "180 мин.",
    2000
  );

  const myMovie2 = new Movie(
    101,
    "Человек-паук",
    "США",
    "Дружелюбный сосед",
    "Фантастика",
    "180 мин.",
    3000
  );

  const myCart = new Cart();

  myCart.add(myMovie1);
  myCart.add(myMovie2);

  const result = 5000;

  expect(result).toBe(myCart.getPrice());
});

test("Получение цены из корзины (со скидкой)", () => {
  const myMovie1 = new Movie(
    100,
    "Интерстеллар",
    "США",
    "Только вперед",
    "Фантастика",
    "180 мин.",
    2000
  );

  const myMovie2 = new Movie(
    101,
    "Человек-паук",
    "США",
    "Дружелюбный сосед",
    "Фантастика",
    "180 мин.",
    3000
  );

  const myCart = new Cart();

  myCart.add(myMovie1);
  myCart.add(myMovie2);

  const result = 4000;
  let discount = 20;

  expect(result).toBe(myCart.getDiscountPrice(discount));
});

test("Удаление из корзины", () => {
  const myMovie1 = new Movie(
    100,
    "Интерстеллар",
    "США",
    "Только вперед",
    "Фантастика",
    "180 мин.",
    2000
  );

  const myMovie2 = new Movie(
    101,
    "Человек-паук",
    "США",
    "Дружелюбный сосед",
    "Фантастика",
    "180 мин.",
    3000
  );

  const myCart = new Cart();

  myCart.add(myMovie1);
  myCart.add(myMovie2);

  let id = 101;
  myCart.delete(id);

  const result = [
    {
      id: 100,
      name: "Интерстеллар",
      country: "США",
      slogan: "Только вперед",
      genre: "Фантастика",
      duration: "180 мин.",
      price: 2000
    }
  ];

  expect(result).toEqual(myCart.items);
});
