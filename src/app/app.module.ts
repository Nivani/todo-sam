import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Todos } from './model/Todos';
import { NgSAM } from '../sam/angular/NgSAM';
import { add } from './model/add.acceptor';
import { remove } from './model/remove.acceptor';
import { removeCompleted } from './model/removeCompleted.acceptor';
import { toggleCompletion } from './model/toggleCompletion.acceptor';
import { setAll } from './model/setAll.acceptor';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

const samInstance = new NgSAM<Todos>(
  { todos: [] },
  [ add, remove, removeCompleted, setAll, toggleCompletion ]
);

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
    HttpModule
  ],
  providers: [
    { provide: NgSAM, useValue: samInstance }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
