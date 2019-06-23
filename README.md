# Storage manager

Class `Storage` provides us with a simple set of methods needed to interact with browsers' `sessionStorage` & `localStorage` objects. The detailed description of the methods can be found in the documentation.

It is presented as npm package and can be installed via `npm i @curveballerpacks/storage-manager`. All its methods can be called within the instance object like

```js
let st = new Storage();
st.save("users", data)
```

Something like [Babel](https://babeljs.io/) is required (and optionally other means, for example, a minifier) in order to transpile the class into JavaScript understood by web browsers and make it ready to be used.

## versions < 2.0.0

It can be imported into your app using ES2015 syntax `import Storage from "@curveballerpacks/storage-manager"`. However, exporting a module from `node_modules` folder via ES2015 `export` word has a pitfall: browserify transforms act only within package's folder and node doesn't understand ES2015 `export` word. In such a case in your bundler solution might look like this (gulp):
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

## versions >= 2.0.0

Since 2.0.0 the Storage class is exported using common.js syntax `module.exports`, it can be easily required in your app like

```js
let Storage = require('@curveballerpacks/storage-manager');
```
