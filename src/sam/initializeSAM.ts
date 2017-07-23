import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {SAM} from './SAM';
import {Acceptor} from './Acceptor';

export function initializeSAM<MODELTYPE>(
  initialModel: MODELTYPE,
  acceptors: Array<Acceptor<MODELTYPE>>
): SAM<MODELTYPE> {
  const subject = new BehaviorSubject(initialModel);
  return {
    present: present,
    select: select
  };

  function present(proposal: any): void {
    const currentModel = subject.getValue();
    const updatedModel = acceptors.reduce(
      (model, acceptor) => {
        const nextModel = acceptor(model, proposal);
        if (nextModel) {
          return nextModel;
        } else {
          return model;
        }
      },
      currentModel
    );
    subject.next(updatedModel);
  }

  function select<T>(selector: (MODELTYPE) => T): Observable<T> {
    return subject.map(selector).distinctUntilChanged();
  }
}
