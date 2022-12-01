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

                {/* for google analytics
                {isValid(resumeGAID) && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${resumeGAID}`}></script>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${resumeGAID}');`,
                            }}
                        />
                    </>
                )} */}

                {/* for hotjar
                {isValid(resumeHotjarID) && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${resumeHotjarID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                        }}
                    ></script>
                )} */}

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default _document;