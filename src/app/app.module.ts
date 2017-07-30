import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { initialModel, Todos } from './model/Todos';
import { add } from './model/add.acceptor';
import { remove } from './model/remove.acceptor';
import { removeCompleted } from './model/removeCompleted.acceptor';
import { toggleCompletion } from './model/toggleCompletion.acceptor';
import { setAll } from './model/setAll.acceptor';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { SAMModule } from '../sam/angular/SAMModule';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoBodyComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SAMModule.run<Todos>(initialModel, [add, remove, removeCompleted, setAll, toggleCompletion])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
