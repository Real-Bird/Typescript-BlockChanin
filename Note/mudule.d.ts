interface Config {
  url: string;
}

declare module "tmp" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
