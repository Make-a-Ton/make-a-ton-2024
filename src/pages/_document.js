import {Head, Html, Main, NextScript} from 'next/document'
import {Analytics} from "@vercel/analytics/react";

export default function Document() {
    return (
        <Html lang="en">
            <link
                rel="stylesheet"/>
            <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
            <title>Make-a-Ton</title>
            <meta name="author" content="Sunith VS"/>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content="24 hour Hackathon"/>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            <Analytics />
            </body>
        </Html>
    )
}
