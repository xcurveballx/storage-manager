# Storage manager


Class `Storage` provides us with a simple set of methods needed to interact with browsers' `sessionStorage` & `localStorage` objects. The detailed description of the methods can be found in the documentation.

It is presented as npm package and can be installed via `npm i @curveballerpacks/storage-manager`. Being written as ES2015 class, it should be imported before usage. All its methods can be called within the instance object like
```js
let st = new Storage();
st.save("users", data)
```

Something like [Babel](https://babeljs.io/) is required (and optionally other means, for example, a minifier) in order to transpile the class into JavaScript understood by modern web browsers.
