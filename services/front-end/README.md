<img src="https://user-images.githubusercontent.com/28607713/212879228-3ca54e74-ee8f-485c-a5d2-e54758b471dc.png"
     alt="planet-logo-white-no-bg"
     width="240">

# Planet frontend-assignment - Front-end project
Front-End position skill assessment home assignment.

## Context
As a Front-End developer in Planet Dataset, you will be asked to participate in the design and implementation of new features that will be used in our price-management platform for eCommerce.

New features usually involve implementing an interface to configure the user's preferences. However, we also implement extensions in the Shopify ecosystem; so you can expect to encounter Liquid source files, HTML and webcomponents in part of the development process.

## Overview
![image](https://user-images.githubusercontent.com/28607713/220129000-b6df3779-92ae-463e-8929-460b47881aaa.png)



This is a basic Angular 14 project that was generated with [Angular CLI](https://github.com/angular/angular-cli). It is provided
as a template in case you want a jumpstart. It already has a `dashboard` module with routing and localization in place so that you
can implement there the UI.

The following libraries are included in case you want to use it:
- [NgRX](https://ngrx.io/) for state management (optional).
- [Transloco](https://ngneat.github.io/transloco/) for localization (optional).
- [Material Angular](https://material.angular.io/) for UI components (optional).

## Project folder structure

- `src/app/common` - Folder with Angular modules for common functionality.

- `src/app/common/layout` - Angular module with the layout components

- `src/app/common/layout/components/main-layout` - The main layout component. It has the language toggle and basic navigation. Feel free to edit it.

- `src/app/features` - Folder with Angular modules for each feature. We understand that a feature is an independent bulk of functionality that has its own routing. 

- `src/app/features/dashboard` - Angular module for the dashboard feature. It is where we propose you to implement the solution

- `src/app/features/dashboard/i18n` - Translations for the dashboard module

- `src/app/features/dashboard/pages` - Folder with the dashboard page component

- `src/app/features/home` - Angular module for the landing page

- `src/app/features/home/i18n` - Translations for the home module

- `src/app/features/home/pages` - Folder with the landing page component

- `src/app/transloco` - Localization module

- `src/assets` - Static assets including, but not limited: styles, images, translations

- `src/environments` - Environment JSON files.

- `src/testing` - Utility classes and functions.

## Development
You can launch the front-end development server from within the root directory using Make (see the README), or you can
use the Angular CLI from within this folder:

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm run test` to execute the unit tests via Jest.

## Further help
Contact use if you have any doubts.
