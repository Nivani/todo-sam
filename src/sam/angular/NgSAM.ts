import { Acceptor } from '../Acceptor';
import { SAM } from '../SAM';
import { Observable } from 'rxjs/Observable';
import { initializeSAM } from '../initializeSAM';

export class NgSAM<MODELTYPE> implements SAM<MODELTYPE> {

  private delegate: SAM<MODELTYPE>;

  public present(data: any): void {
    this.delegate.present(data);
  }

  public select<T>(selector: (MODELTYPE) => T): Observable<T> {
    return this.delegate.select(selector);
  }

  constructor(
    initialModel: MODELTYPE,
    acceptors: Array<Acceptor<MODELTYPE>>
  ) {
    this.delegate = initializeSAM(initialModel, acceptors);
  }
}
