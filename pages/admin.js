import TituleComponent from '../components/tituleComponent'
import Link from "next/link";
import { useState } from "react";

import { connectToDatabase } from "../util/mongodb";

export default function Admin({data}){
  
    const [ itemList, setItemList ] = useState(data);

    async function delItem(selected){
       
        //FUNCTION DELETE ITEM FRONT
        for(var i=0; i<itemList.length; i++){
          if(itemList[i].titule == selected){            
              itemList.splice(i, 1); }        
        }
        
        let excluido = itemList
        let cop = [...excluido];    
        
        setItemList(cop)
         //FUNCTION DELETE ITEM FRONT
  
          try {
           
            const res = await fetch('/api/cadjobs', {
              method: 'delete',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  titule:selected,
              }
              ) 
            })
            
            if (res.status === 200) {
              console.log("DELETED")
             
            } else {
              alert('Sorry, something went wrong.')
            }
          } catch(err) {
            alert(err)
          }
        
  }   
  const handleDelete = (e) => {
    e.preventDefault()
    
    delItem(e.currentTarget.id)
    //alert("O item "+e.currentTarget.id+" foi deletado")  
}

    return(<>
    <div className="p-4"><Link href="/"> 
    <a className="underline text-blue-700">{`<< home`}</a>
    </Link></div>
        <div className="lg:container  lg:mx-auto lg:px-10 p-2">
            <TituleComponent titule="Admin :" tituleSpan=" adcionar novos projetos" subTitule="Dashboard The Best Guys"/>

            <div className="text-blue-900 ">
                <h1 className="text-2xl  font-bold border-b border-gray-200 ">Jobs Done</h1>
                {itemList && itemList.map(({ titule, img, place }) => (
        <Link href={`/portfolio/${titule}`}>
                <div className="py-2 flex items-center" key={titule}>
                
                    <img className="rounded w-14 h-14" src={`/uploads/${img}`}/>
                
                <div className="p-2">
                    <h1 className="font-bold">{titule}</h1>
                    {/* <p className="font-light text-gray-500">{content}</p> */}
                    <p className="text-gray-500 font-light">{place}</p>
                </div>
                <div id={titule} className="cursor-pointer absolute right-6" onClick={handleDelete}>
                        <svg className="w-6 h-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
            </div>
         </Link>
          ))}
            </div>
            <div className="">
            <Link href={`/portfolio/new`}>
                <div className="text-xl my-2 cursor-pointer bg-blue-600 border-b-4 border-r-4 rounded-lg border-blue-800 hover:border-blue-500">
                    <p className=" text-center p-2 text-white font-semibold">Novo Job</p>    
                </div>
            </Link>
            </div>
        </div>   
    
    </>)

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