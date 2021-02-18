import Layout from "../components/layout"
import TituleComponent from "../components/tituleComponent"
import CardProject from '../components/cardProject'

import { connectToDatabase } from "../util/mongodb";


export default function Portfolio({data}){
    
    // const data =[{titule:"Furniture Installation",img:"images/slide_2.jpg",content: "When the need for restructuring arrives, call us. We are here to get your project off the drawing board! We have a great experience in installation and managing office and home projects. We are ready to assembly several kinds of furniture seeking safety and low costs for our customers."},
    //             {titule:"General Residential Services", img:"images/slide_3.jpg", content:"All houses need some adjustments over time. We can help you with a worn down door lock, a broken door handle, a hinge without some screws, a garden to clean and a lot of other types of home maintenances. Call and tell us about your necessities."}]
    return <Layout>
        <div className="bg-blue-50">
        <TituleComponent titule="Recent" tituleSpan="Projects" subTitule="Our Portfolio" />
        <div className="m-4  my-10 shadow-xl py-2">
            <CardProject data={data}/>
         </div>
         </div>
    </Layout>
}



export async function getServerSideProps() {

    const { db } = await connectToDatabase();  
  
    const response = await db
      .collection("jobs")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();
  
    return {
      props: {
        data: JSON.parse(JSON.stringify(response)),
      },
    };
  }
