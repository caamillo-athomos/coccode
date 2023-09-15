export function Default({ children }) {
    return `
        <!DOCTYPE html>
        <html lang="it">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Coccodè</title>
            <script src="https://unpkg.com/htmx.org@1.9.3"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
            <link href="/styles.css" rel="stylesheet">
        </head>
        ${ children }
    `
}