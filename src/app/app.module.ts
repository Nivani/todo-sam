import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { initialModel, Todos } from './model/Todos';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { SAMModule } from '../sam/angular/SAMModule';
import { todos } from './model/todos.acceptor';
import { TodoService } from './remote/TodoService';

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
    SAMModule.run<Todos>(initialModel, [todos])
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
