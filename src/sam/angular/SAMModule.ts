import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgSAM } from './NgSAM';
import { Acceptor } from '../Acceptor';

@NgModule({})
export class SAMModule {
  static run<MODELTYPE>(initialModel: MODELTYPE, acceptors: Array<Acceptor<MODELTYPE>>): ModuleWithProviders {
    return {
      ngModule: SAMModule,
      providers: [{provide: NgSAM, useValue: new NgSAM(initialModel, acceptors)}]
    };
  }
}
