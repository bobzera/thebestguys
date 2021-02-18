import InfoCard from '../components/infoCard'
import CardServices from '../components/cardServices'
import Layout from '../components/layout'
import Slide from '../components/slide'
import TituleComponent from '../components/tituleComponent'
import CardProject from '../components/cardProject'
import CardComments from '../components/cardComments'

import { connectToDatabase } from "../util/mongodb";

export default function Home({data}) {
  const dataServices =[{titule:"Furniture Installation",img:"images/slide_2.jpg",content: "When the need for restructuring arrives, call us. We are here to get your project off the drawing board! We have a great experience in installation and managing office and home projects. We are ready to assembly several kinds of furniture seeking safety and low costs for our customers."},
                {titule:"General Residential Services", img:"images/slide_3.jpg", content:"All houses need some adjustments over time. We can help you with a worn down door lock, a broken door handle, a hinge without some screws, a garden to clean and a lot of other types of home maintenances. Call and tell us about your necessities."}]
  const dataComment = [{description:"Software Engenier", local:"London - UK",titule:"Olinda Nova",img:"http://www.fotos-imagens.net/wp-content/uploads/2011/11/Rosto-modelo.jpg",content: "When the need for restructuring arrives, call us. We are here to get your project off the drawing board! We have a great experience in installation and managing office and home projects."},
  {description:"Princess", local:"London - UK", titule:"Joao Outro", img:"https://cdn.mundodastribos.com/2012/11/541316-Cortes-de-cabelo-para-rosto-redondo-masculino.1.jpg", content:"All houses need some adjustments over time. We can help you with a worn down door lock, a broken door handle, a hinge without some screws, a garden to clean and a lot of other types of home maintenances."}]

  return (<>
     <Layout>       
        <Slide data={dataServices}/>
        
        <InfoCard/>

        <TituleComponent titule="We provide the" tituleSpan="best services" subTitule="Our Services"/>

        <CardServices data={dataServices}/>

        <div className="bg-blue-50 py-8">
        <TituleComponent titule="Recent" tituleSpan="Projects" subTitule="Our Portfolio"/>

        <CardProject data={data}/>
        </div>
        <TituleComponent titule="Depoiments" tituleSpan="" subTitule="Our costumers"/>

        <CardComments data={dataComment}/>

     </Layout>
  </>)
}




export async function getServerSideProps() {

   const { db } = await connectToDatabase();  
 
   const response = await db
     .collection("jobs")
     .find({})
     .limit(3)
     .sort({ metacritic: -1 })
     .toArray();
 
   return {
     props: {
       data: JSON.parse(JSON.stringify(response)),
     },
   };
 }