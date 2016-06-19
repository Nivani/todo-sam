System.config({
    packages: {
        output: {
            format: "register",
            defaultExtension: "js"
        }
    }
});
System.config({
    paths: {
        "systemjs": "node_modules/systemjs/dist/system.js",
        "incremental-dom": "node_modules/incremental-dom/dist/incremental-dom.js",
        "plugin-babel": "node_modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",
        "system-polyfills": "node_modules/systemjs/dist/system-polyfills.js",
        "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js"
    },
    transpiler: "plugin-babel"
});