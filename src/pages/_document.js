import { Html, Head, Main, NextScript } from 'next/document'
import data from '../data';

const _document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href={data.favicon_url} />
                <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content={data.description} />
                <link rel="canonical" href={data.resume_url} />
                <meta name="keywords" content="resume,development,developer" />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:title" content={data.og_title} />
                <meta property="og:url" content={data.resume_url} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.author.image_url} />

                <meta name="twitter:creator" content={`${data.author.first_name} ${data.author.last_name}`} />
                <meta name="twitter:title" content={data.twitter_title} />
                <meta name="twitter:description" content={data.description} />
                <meta name="twitter:image" content={data.author.image_url} />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default _document;