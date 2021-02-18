import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
  
const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services',},
  { href: '/portfolio', label: 'Portfolio',},
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' }  
]



export default function Nav({siteTitle}) {   

  const [ toogle, setToogleInput ] = useState(false);
    
  const handleMore = (e) => {
    e.preventDefault();
    setToogleInput(true)
  }

  const handleLess = (e) => {
    e.preventDefault();
    setToogleInput(false)
  }

  return (
    <nav className="shadow-lg">
      <div className="py-2 grid grid-cols-3 sm:grid-cols-6 items-center">
          <div className="pl-4 col-span-2">
            <Link href="/">
            <Image
        src="/images/logo.jpeg"
        alt="The Best Guys"
        width={270}
        height={90}
      />
           
            </Link>
          </div>
          <div className="content-to-hide sm:col-span-4">
            <ul className="p-4 flex">
              {links.map(({ href, label, on }) => (           
                <li className="p-2" key={`${href}${label}`}>
                  <Link href={href}>
                    <a  className="no-underline text-base font-semibold px-4 hover:text-blue-500">{label}</a>
                  </Link>                           
                </li>
              ))}
            </ul>
          </div>
          {!toogle && <div className="justify-self-end w-14 pr-4 sm:hidden"><img className="transform hover:rotate-90" onClick={handleMore} src="/icons/menu.svg"></img></div>}
          {toogle && <div className="justify-self-end w-14 pr-4 "><img onClick={handleLess} src="/icons/x.svg"></img></div>}      
      </div>
       
      {toogle &&
      <div className="transition ease-in duration-700">
        <ul className="p-4">
          {links.map(({ href, label}) => (           
            <li className="p-2 border-b" key={`${href}${label}`}>
              <Link href={href}>
                <a  className="no-underline text-base font-semibold px-4 hover:text-blue-500">{label}</a>
              </Link>                           
             </li>
          ))}
        </ul>
      </div> 
      }     
    </nav>
  )
}
