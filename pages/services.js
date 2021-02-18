import Layout from "../components/layout"
import TituleComponent from "../components/tituleComponent"
import CardServices from '../components/cardServices'

export default function Services(){
    const data =[{titule:"Furniture Installation",img:"images/slide_2.jpg",content: "When the need for restructuring arrives, call us. We are here to get your project off the drawing board! We have a great experience in installation and managing office and home projects. We are ready to assembly several kinds of furniture seeking safety and low costs for our customers."},
                {titule:"General Residential Services", img:"images/slide_3.jpg", content:"All houses need some adjustments over time. We can help you with a worn down door lock, a broken door handle, a hinge without some screws, a garden to clean and a lot of other types of home maintenances. Call and tell us about your necessities."}]
    return <Layout>
        <TituleComponent titule="We provide the" tituleSpan="best services" subTitule="Our Services" />
        <div className="m-4 bg-white my-10 shadow-xl py-2">
            <CardServices data={data}/>
         </div>
    </Layout>
}