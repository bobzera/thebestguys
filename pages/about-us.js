import Layout from "../components/layout"
import TituleComponent from "../components/tituleComponent"
import Link from 'next/link'

export default function About(){
    return <Layout>
        <TituleComponent titule="The Best Guys LTD" tituleSpan="" subTitule="about us" />
        <div className="m-4 bg-white my-10 shadow-xl py-2">
             <div className="">
                  <img className="w-full" src="/images/slide_2.jpg"/>
             </div>
             <div className="p-4 pb-8">
                 <h1 className="text-blue-900 text-xl font-bold py-2">The Best Guys</h1>
                 <p className="text-gray-500 py-2">We are a company born in London in the summer of 2020. Created by a team with many years of experience in installation. Our objective is to offer services with quality, agility and commitment through specialized technicians and customized services. We understand your project and find the best way to make it a reality.</p>
                 <p className="text-gray-500 py-2">We can install almost anything as we have many years of experience. It’s hard to face a challenge that we have never seen.</p>
                 <p className="text-gray-500 py-2 pb-10">If you have a product or a project and you are looking for a company to help you, contact us. We are always looking for new areas to explore, so let’s talk about your project.</p>
                
                <Link href="/contact">
                 <a className="p-2 px-8 cursor-pointer bg-blue-600 text-white rounded-md border-b-2 border-blue-300">Get In Touth</a>
                 </Link>
              </div>
              
         </div>
    </Layout>
}