import { inject } from '@angular/core';
import { Observable, OperatorFunction, catchError, map, of } from 'rxjs';
import { httpErrorResponseMSAdpater } from '../adapters/http-error-response.adapter';
import { NetworkService } from '../services/network/network.service';
import { Adapter } from '../types';
import { BasicResponse } from './basic-response.model';

export abstract class CrudApi {
  protected readonly networkService: NetworkService = inject(NetworkService);
  protected routes: any = {};

  protected doCreate<T>(body: Partial<T>, adapter: Adapter<T>): Observable<BasicResponse<T>> {
    return this.networkService
      .doPost(this.routes.post(), body)
      .pipe(this.mapResponse<T>(adapter), this.catchErrorResponse<T>());
  }

  protected doRead<T>(adapter: Adapter<T>): Observable<BasicResponse<T>> {
    return this.networkService.doGet(this.routes.get()).pipe(this.mapResponse<T>(adapter), this.catchErrorResponse<T>());
  }

  protected doUpdate<T>(id: string, body: Partial<T>, adapter: Adapter<T>): Observable<BasicResponse<T>> {
    return this.networkService
      .doPut(this.routes.put(id), body)
      .pipe(this.mapResponse<T>(adapter), this.catchErrorResponse<T>());
  }

  protected doDelete(id: string): Observable<BasicResponse<boolean>> {
    return this.networkService.doDelete(this.routes.delete(id)).pipe(
      this.mapResponse<boolean>((): boolean => true),
      this.catchErrorResponse<boolean>()
    );
  }

  protected mapResponse<T>(adapter: Adapter<T>): OperatorFunction<any, BasicResponse<T>> {
    return map((response: any): BasicResponse<T> => new BasicResponse<T>(adapter(response)));
  }

  private catchErrorResponse<T>(): OperatorFunction<any, BasicResponse<T>> {
    return catchError(
      (error: any): Observable<BasicResponse<T>> =>
        of(new BasicResponse<T>(undefined, httpErrorResponseMSAdpater(error)))
    );
  }
}
