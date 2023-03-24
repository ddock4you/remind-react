export interface FetchType {
    url: string;
    method?: string;
    body?: {
        text: string;
    };
    headers?: HeadersInit;
}

export type applyDataFunc = (data: any) => void;
// export type applyDataFunc<T> = (data: T) => void;

export type FectFuncProp = (requestConfig: FetchType, applyData?: applyDataFunc) => Promise<void>;
