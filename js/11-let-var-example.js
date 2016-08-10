function ScopeTest() {
    if (true) {
        var foo = 'use anywhere';
        var bar = 'use in this block';
    }
    console.log(foo); //works !!
    // console.log(bar); //error
}
//# sourceMappingURL=11-let-var-example.js.map