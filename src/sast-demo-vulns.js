/*
 * Intentionally vulnerable examples for SAST verification only.
 * This file is not imported by the application runtime.
 */

function demoDomXss() {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');

    if (message) {
        document.getElementById('sast-demo-output').innerHTML = message;
    }
}

function demoEvalInjection() {
    const expression = window.location.hash.slice(1);

    if (expression) {
        eval(expression);
    }
}

demoDomXss();
demoEvalInjection();
