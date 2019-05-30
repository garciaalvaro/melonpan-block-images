declare interface Object {
	[key: string]: any;
}

type FunctionVoid = (...args: any) => void;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
