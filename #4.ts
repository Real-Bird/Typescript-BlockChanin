type Words = {
  // string 만을 가지는 object
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("Kimchi", "Food");

const dict = new Dict();

dict.add(kimchi);
dict.def("Kimchi");

console.log(dict);

// interface User {
//   name: string;
// }

// interface Player extends User {}

// const js: Player = {
//   name: "js",
//   nickname: "JS",
//   health: 10,
// };

// interface User {
//   name: string;
// }
// interface User {
//   nickname: string;
// }
// interface User {
//   health: number;
// }

interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// generic + class + interface

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
stringStorage.set("Hello", "1");

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("SS");
