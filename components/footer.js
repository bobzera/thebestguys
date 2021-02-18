import Link from 'next/link'

const Footer = () => {  
    const services = [
        { href: '/', label: 'Home' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/about-us', label: 'About Us' },
        { href: '/contact', label: 'Contact' }  
      ]
      const data = [
        {titule:"Instagram", img:"icons/instagram.svg", content:"@thebestguys.co.uk"},
        {titule:"E-Mail", img:"icons/email.svg", content:"office@thebestguys.co.uk"},
        {titule:"Phone", img:"icons/phone.svg", content:"07759 031128"}
    ]
    return (
      <>
      <div className="bg-blue-900 p-2 border-t-4 border-blue-600 text-white"> 
          <h1 className="font-bold text-lg py-4">Web Site</h1>
          <ul>
        {services.map(({ href, label}) => ( 
          <Link href={href}>
            <li key={label}><a>{label}</a></li>
          </Link>
      ))}
      </ul>

      <h1 className="font-bold text-lg py-4">Terms</h1>
          <ul>        
          <Link href="/">
            <li><a>Privacy Policy</a></li>
          </Link>      
      </ul>
      

        <h1 className="font-bold text-lg py-4">Where found us</h1>
        <ul>  
        {data.map(({ titule, img, content }) => (      
         
            <li><a>{`${titule}: ${content}`}</a></li>
        ))}
        </ul>
        </div>
        <div className="text-center p-2 py-6  border-b-4 border-blue-600">
            <p className="font-thin">Copyright © 2020 | We are a trading name of The Best Guys Ltd registered in England No. 12889628</p>
        </div>
      
      </>
    )
  };
  
  export default Footer;