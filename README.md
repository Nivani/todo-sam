# TodoSam

This is a [TodoMVC](http://todomvc.com/) project that shows how [SAM Pattern](http://sam.js.org/) can be implemented in a typical Angular application.

It demonstrates scenarios you will find in a typical web application: handling user input, (reactive) computed properties, and asynchronous operations like calling a remote API.

The idea is to make it as "Angular-like" as possible so that it is accessible for a typical Angular developer.

In this spirit we used [Angular CLI](https://cli.angular.io/) to generate the project, [RxJS](http://reactivex.io/rxjs/) to create a reactive loop and Typescript.

## Introduction

You do not need a complex framework to use SAM Pattern. The core is only ~40 lines of Typescript ([See initializeSAM.ts](src/sam/initializeSAM.ts)).

The rest is about how you can use familiar concepts from Angular and RxJS:
* Actions and State: [src/app/app.component.ts](src/app/app.component.ts)
* Model: [src/app/model](src/app/model)
* State representation: [src/app/state-representation](src/app/state-representation)
* View: [src/app/todo-body/todo-body.component.ts](src/app/todo-body/todo-body.component.ts), [src/app/todo-header/todo-header.component.ts](src/app/todo-header/todo-header.component.ts) and [src/app/todo-footer/todo-footer.component.ts](src/app/todo-footer/todo-footer.component.ts)
