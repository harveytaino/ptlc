import HtmlHead from '@/components/pages/layout/HtmlHead'
import Header from '@/components/pages/layout/Header'

type Title = {
    title: string
}

const Layout = ( ( title:Title ) => {
    return (
        <>
            <HtmlHead title={title.title} />
            <Header />
        </>
    )
})

export default Layout