import {Observable} from 'rxjs/Observable';

export interface SAM<MODELTYPE> {
  present(proposal: any): void;
  select<T>(selector: (MODELTYPE) => T): Observable<T>;
}
