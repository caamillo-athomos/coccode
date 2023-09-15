// Deps
import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import * as elements from "typed-html";

// Components
import { BaseHtml } from "./components/layout/BaseHtml.jsx"

const App = new Elysia()
    .use(html())
    .get('/', ({ html }) =>
        html(
            <BaseHtml>
                <body>
                    <h1>Hello World</h1>
                    <button hx-post="/test" hx-swap="outerHTML">
                        Click me
                    </button>
                </body>
            </BaseHtml>
        ))
    .post('/test', () => <div>Hello, HTMX!</div>)
    .listen(3000)

console.log(`Server is running at http://${ App.server.hostname }:${ App.server.port }`)