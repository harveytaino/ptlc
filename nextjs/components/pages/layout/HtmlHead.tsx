import Head from 'next/head'
type Title = {
    title: string
}

const HtmlHead = ( ( title:Title ) => {
    return (
        <Head>
            <title>PTLC - {title.title} </title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
})

export default HtmlHead