type Head = <T>(arr: T[]) => T | undefined;
type Obj = {
  [key: string]: string;
};
type HasIn = (object: Obj, key: string) => boolean;
type Predicate = <T>(value: T | T[], index: number, array: T[]) => boolean;

declare module "lodash" {
  function head<T>(arr: T): Head;
  function hasIn(object: Obj, key: string): HasIn;
  function isBoolean(value: boolean): boolean;
  function toString<T>(value: T): string;
  function split(string: string, separator: string, limit: number): string;
  function hasPath(object: Obj, path: string[] | string): boolean;
  function filter<T>(array: T[], predicate: Predicate): T[];
  function every<T>(array: T[], predicate: Predicate): boolean;
  function map<T>(array: T[], iteratee: Predicate): T[];
}
