import { HttpHeaders, HttpContext, HttpParams } from '@angular/common/http';

export type HttpOptions = {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'response';
  params?:
    | HttpParams
    | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
  responseType: 'json' | 'blob';
  reportProgress?: boolean;
  withCredentials?: boolean;
};
