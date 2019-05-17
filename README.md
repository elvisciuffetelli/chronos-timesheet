# CHRONOS

### LINTING

Linting code is already an established part of any (popular) JavaScript project and has a lot of benefits such as:

- Readability
- Pre-code review
- Finding (syntax) errors before execution

As we have the possibility to define a set of styling rules, this increases the readability of our code towards the effort of having our codebase look like it was written by “one person”. This is important, as it can happen that software engineers move from codebase to codebase among projects and a lot of people can become involved. A common set of rules makes it easier to really understand what the code is doing.

Further linting rules help to improve code reviews, as linting already acts as a pre-code review, checking against all the basic issues such as syntax errors, incorrect naming, the tab vs. spaces debate, etc. It increases the value of having code reviews, as people are then more willing to check the implementation rather than complain about syntax errors.

**Note: consider installing VS code extension Prettier!**

### CODE STYLE GUIDE

#### One render per class

If you need multiple render please consider using a functional component and further separate the code.

...

### REST API FETCHING

#### Usage

It's better to centralize the logic for the Api REST calls. In this way we can use instances of Axios API and use the interceptors for handling errors and global loader. In src/backendApi/api/Api.js you can find the custom APIs.

Everywhere in the app, when we need to fetch data, import the function used to map the data from the Api folder

### AUTHENTICATION

Wrap the routes with the higher order component `withAuth` in src/utility/withAuth.js

The token it's stored in the cookies using the library `js-cookie`

### STOP THE PROMISES WHEN THE COMPONENT IS UNMOUNTED

**Avoid memory leaks**

Using the route modals it happens that, when the user hit an error in the response interceptor, the new route modal it's pushed to the history.

This cause React to keep the reference of the component which is going to unmount, and any setState used after the redirect to the new route it's been triggered.
This causes memory leaks and warnings in the console. Prevent them using the higher order component `withUnmounted` and the `hasUnmounted` flag (eg. Dashboard.js)

## AVAILABLE SCRIPTS

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
