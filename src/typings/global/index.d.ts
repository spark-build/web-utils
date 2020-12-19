interface AnyObject<T = any> {
  [k: string]: T;
}

type StringNumberUnion = string | number;
