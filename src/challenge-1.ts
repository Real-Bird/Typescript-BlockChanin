interface LocalStorageAPI<T> {
  setItem(key: string, value: T): void;
  getItem(key: string): T;
  clearItem(key: string): void;
  clear(): void;
}

interface SStorage<T> {
  [key: string]: T;
}

abstract class AbsLocalStorage<T> implements LocalStorageAPI<T> {
  abstract localStorage: SStorage<T>;
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage<T> extends AbsLocalStorage<T> {
  public localStorage: SStorage<T>;
  constructor() {
    super();
    this.localStorage = {};
  }
  setItem(key: string, value: T): void {
    this.localStorage[key] = value;
  }
  getItem(key: string): T {
    return this.localStorage[key];
  }
  clearItem(key: string): void {
    delete this.localStorage[key];
  }
  clear(): void {
    this.localStorage = {};
  }
}

const localStorage = new LocalStorage();

// setItem
localStorage.setItem("kimchi", "delicious food");
localStorage.setItem("one", 1);
localStorage.setItem("obj", { key: "value" });

// getItem
console.log(localStorage.getItem("kimchi"));
console.log(localStorage.getItem("one"));
console.log(localStorage.getItem("obj"));

// update
localStorage.setItem("one", "one");
console.log(localStorage.getItem("one"));

// remove
localStorage.clearItem("obj");
console.log(localStorage.localStorage);

// all remove
localStorage.clear();
console.log(localStorage.localStorage);

interface GeolocationAPI {
  getCurrentPosition(successFn: Geolocation): void;
  getCurrentPosition(successFn: Geolocation, errorFn: Geolocation): void;
  getCurrentPosition(
    successFn: Geolocation,
    errorFn: Geolocation,
    optionsObj: Geolocation
  ): void;
  watchPosition(success: Geolocation): number;
  watchPosition(success: Geolocation, error: Geolocation): number;
  watchPosition(
    success: Geolocation,
    error: Geolocation,
    options: Geolocation
  ): number;
  clearWatch(id: number): void;
}

const geolocation = navigator.geolocation;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

geolocation.getCurrentPosition(() => console.log("first cp"));
geolocation.getCurrentPosition(
  () => console.log("second cp"),
  () => console.log("seconde cp err")
);
geolocation.getCurrentPosition(
  () => console.log("third cp"),
  () => console.log("third cp err"),
  options
);
geolocation.watchPosition(() => console.log("first wp"));
geolocation.watchPosition(
  () => console.log("second wp"),
  () => console.log("second wp err")
);
geolocation.watchPosition(
  () => console.log("third wp"),
  () => console.log("second wp err"),
  options
);
geolocation.clearWatch(5);
