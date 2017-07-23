import {Acceptor} from './Acceptor';
import {initializeSAM} from './initializeSAM';
import {SAM} from './SAM';

function setupSimpleIncrementDecrement(): SAM<{ count: number }> {
  const decrementAcceptor: Acceptor<{ count: number }> = (model, proposal) => {
    if (proposal.type === 'DECREMENT') {
      return { count: model.count - 1 };
    } else {
      return model;
    }
  };
  const incrementAcceptor: Acceptor<{ count: number }> = (model, proposal) => {
    if (proposal.type === 'INCREMENT') {
      return { count: model.count + 1 };
    } else {
      return model;
    }
  };

  return initializeSAM<{ count: number }>({ count: 0 }, [decrementAcceptor, incrementAcceptor]);
}

describe('initializeSAM', () => {
  it('works correctly for a simple case', () => {
    const sam = setupSimpleIncrementDecrement();

    const countSpy = jasmine.createSpy('countSpy');
    sam.select(model => model.count).subscribe(countSpy);

    expect(countSpy).toHaveBeenCalledWith(0);

    sam.present({ type: 'INCREMENT' });

    expect(countSpy).toHaveBeenCalledWith(1);

    sam.present({ type: 'DECREMENT' });

    expect(countSpy).toHaveBeenCalledWith(0);
    expect(countSpy.calls.count()).toBe(3);
  });

  it('only pushes to selected observable when value changes', () => {
    const sam = setupSimpleIncrementDecrement();

    const countSpy = jasmine.createSpy('countSpy');
    sam.select(model => model.count).subscribe(countSpy);

    expect(countSpy.calls.count()).toBe(1);

    sam.present({ type: 'NO_CHANGE' });

    expect(countSpy.calls.count()).toBe(1);
  });
});
