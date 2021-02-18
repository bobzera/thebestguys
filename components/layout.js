import Head from 'next/head'
import Footer from './footer'
import Nav from './nav'

export const siteTitle = "The Best Guys - We have it"

export default function Layout({children}) {
  return (<>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header className="lg:container  lg:mx-auto lg:px-10">
      <Nav siteTitle={siteTitle}/>
    
    
    {children}
    
    
    <Footer/>

    </header>
  </>)
}
