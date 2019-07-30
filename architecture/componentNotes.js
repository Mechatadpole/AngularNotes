//! ANGULAR COMPONENT NOTES

/**

**  C O L O R . C O D E D . C O D E . N O T E S

*? = TERMS

*?????????????????????????????????????????????????????

  *! providers: Resources that will be injected into the component constructor

 *?????????????????????????????????????????????????????

 *! selector: The query selector that will find the element in the HTML and replace by the component

 *?????????????????????????????????????????????????????

 *! styles: Inline styles. NOTE: DO NOT use this parameter with require, it works on development but when you build the application in production all your styles are lost

 *?????????????????????????????????????????????????????

 *! styleUrls: Array of path to style files

 *?????????????????????????????????????????????????????

 *! template: String that contains your HTML

 *?????????????????????????????????????????????????????

 *! templateUrl: Path to a HTML file

 *?????????????????????????????????????????????????????

 *TODO EXAMPLE OF A COMPONENT
 *?  import { Component } from '@angular/core';
 *? @Component({
 *!       selector: 'app-required',
 *!       styleUrls: ['required.component.scss'],
 *!       template: `This field is required.`,
 *!       templateUrl: 'required.component.html',
 *?   })
 *?   export class RequiredComponent { }

 *TODO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

 *? TEMPLATES AND STYLES

 *! A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the DOM. There are two types of data binding:

 *?1 Event binding lets your app respond to user input in the target environment by updating your application data.

 *?2 Property binding lets you interpolate values that are computed from your application data into the HTML.


 * Templates are HTML files that may contain logic. You can specify a template in two ways.

 *! Passing template as a file path:

 *  @Component({
        templateUrl: 'hero.component.html',
    })

*! Passing template as an inline code:

*  @Component({
        template: `<div>My template here</div>`,
    })


*? Templates may contain styles. The styles declared in @Component are different from your application style file, anything applied in the component will be restricted to this scope . For example, say you add: div { background: red; } All divs inside the component will be red, but if you have other components, other divs in your HTML they will not be changed at all.

*! The generated code for such an example would be genreated as such:
        <style>div[_ngcontent-c1] {background: red}</style>

** You can add styles in two ways the same as the template

*! Passing an array of file paths

* @Component({
    styleUrls: ['hero.component.css'],
  })

*! Passing an array of inline codes

   * styles: [ `div { background: lime; }` ]

* TODO: You shouldnt use styles with require as it will not work when you build your application to production.
*/

//? ABOVE CONTENT FROM THE ANGULAR BOOK

//! ANGULAR DOCUMENTATION RELATED NOTES.

//! The basic building blocks of an angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
//? Components define views, which are sets of screen elements that angular can choose among and modify according to your program logic and data.
//? Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making yoyur code modular, reusable, and efficient
//! Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.
//? The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow angular to modify the HTML before rendering it for display.
//? The metadata for a service class provides the information angular needs to make it available to components through dependency injection
// An apps components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.
//* 
//* M O D U L E S ---------- N O T E S ------------------- Y E E T *\\
//? Angular NgModules differ from and complement javaScript modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.
//! Every Angular app has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An app typically contains many functional modules.
//?  Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. For example, to use the router service in your app, you import the Router NgModule.
//! Organizing your code into distinct functinal modules helps in managing development of complex applications, and in designing for reusability. In addition, this technique let you take advantage of lazy-loading that is, loading modules on demand-to minimize the amount of code that needs to be loaded at startup.
//TODO For more detail on modules, https://angular.io/guide/architecture-modules
