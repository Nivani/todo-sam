import { Todos } from './Todos';

export function filter(model: Todos, proposal: any): Todos {
  if (proposal && typeof(proposal.filter) === 'string') {
    model.filter = proposal.filter;
  }
  return model;
}
