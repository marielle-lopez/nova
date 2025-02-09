# Nova

## Changelog

### 30 July 2024

- Worked on the `Carousel` component:
  - Spent some time styling the overlay to be positioned on top of the backdrop image
  - Now automatically switches to next featured movie (used the help of [this Stack Overflow answer](https://stackoverflow.com/a/53397029/19579561))
- Constructed the `NavBar` component to allow a user to navigate between pages of the website, and added generic styling

### 29 July 2024

- Continued setting up service and client files for API calling
- Researched into [TypeScript type declarations](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- Resolved "Could not find a declaration file for module" error using [this Stack Overflow answer](https://stackoverflow.com/a/76677938/19579561)
- Resolved "Uncaught ReferenceError: process is not defined" error using [this Stack Overflow answer](https://stackoverflow.com/a/76047526/19579561)
  - When using Vite, you should use `import.meta.env` instead of `process.env`
- Extracted existing code into separate components to abide by React conventions (i.e., dumb components, pages, containers, etc.)
- Created `Carousel` component and associated container to store business logic
- Brushed up on Sass and created stylesheets for `Carousel` components

### 24 July 2024

- Set up Vite React + TypeScript project
- Researched APIs for movie data
- Began constructing service and client files for API calls
- Started brainstorming UI design
