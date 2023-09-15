// Deps
import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import * as elements from "typed-html";

// Components
import { Default } from "./components/layout/Default.jsx"

const App = new Elysia()
    .use(html())
    .get('/', ({ html }) =>
        html(
            <Default>
                <h1>Hello Worlds!</h1>
            </Default>
        ))
    .listen(3000)

console.log(`Server is running at http://${ App.server.hostname }:${ App.server.port }`)