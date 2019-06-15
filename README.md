# Storage manager


Class `Storage` provides us with a simple set of methods needed to interact with browsers' `sessionStorage` & `localStorage` objects. The detailed description of the methods can be found in the documentation.

It is presented as npm package and can be installed via `npm i @curveballerpacks/storage-manager`. Being written&exported as ES2015 class, it should be imported before usage. All its methods can be called within the instance object like
```js
let st = new Storage();
st.save("users", data)
```

Something like [Babel](https://babeljs.io/) is required (and optionally other means, for example, a minifier) in order to transpile the class into JavaScript understood by web browsers and make it ready to be used. A pitfall can be exporting into your app a module from `node_modules` folder via ES2015 `export`. In this case in your bundler it might look like this (gulp):
```js
...    
browserify.transform("babelify",
    {
        presets: ["@babel/preset-env"],
        sourceMaps: true,
        global: true,
        ignore: [/\/node_modules\/(?!@curveballerpacks\/)/]
    }).bundle()
...
```
We babelify our package in `node_modules`, so that ES2015 `export` becomes understandable to node and the package gets actually exported/imported.
