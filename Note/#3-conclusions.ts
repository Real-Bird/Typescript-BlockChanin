type Player1<E> = {
  name: string;
  extraInfo: E;
};

type JsExtra = {
  favFood: string;
};

type JsPlayer = Player1<JsExtra>;

const js: JsPlayer = {
  name: "js",
  extraInfo: {
    favFood: "pork",
  },
};

const ts: Player1<null> = {
  name: "ts",
  extraInfo: null,
};

type A = Array<number>;

let a: A = [1, 2, 3, 4];
