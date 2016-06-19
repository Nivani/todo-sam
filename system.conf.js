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
        "incremental-dom": "node_modules/incremental-dom/dist/incremental-dom.js"
    },
    transpiler: "none"
});