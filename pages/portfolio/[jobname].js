import TituleComponent from '../../components/tituleComponent'
import Upload from '../../components/upload'
import { useState } from 'react'
import { useEffect } from 'react'
import { connectToDatabase } from "../../util/mongodb"
import { useRouter } from 'next/router'

export default function job({data}){  
    
  const router = useRouter()
  const { jobname } = router.query

  function back(){
    router.push('/admin')
  }

  
    const [ inputTitule, setInputTitule ] = useState('');
    const [ inputContent, setInputContent ] = useState('');
    const [ inputPlace, setInputPlace ] = useState('');    
    const [nameImg, setImage] = useState('')

    if(data){
    useEffect(() => {
      setInputPlace(data[0].place)
      setInputContent(data[0].content)
      setImage(data[0].img)
      setInputTitule(data[0].titule)  
    }, []);}
  


    async function Purchased(selected,purchasedValue){

        let pos = itemList.map(function (e) {
          return e.nameItem;
        }).indexOf(selected); 
  
        let excluidio = itemList
        excluidio[pos] = {nameItem: selected, purchased: purchasedValue}    
        let copii = [...excluidio];
     
      setItemList(copii)
  
          
        
  }   
  
    
      
      async function addJob(){  

        if(!data){

        if(inputPlace && inputTitule && inputContent && nameImg){
  
          try {
            const res = await fetch('/api/cadjobs', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                titule:inputTitule,
                content:inputContent,
                place:inputPlace,
                img:`${nameImg}`                
                }
              ) 
            })
            
            if (res.status === 200) {
              
              console.log("Insert done")
              setImage('')
              setInputContent('')
              setInputPlace('')
              setInputTitule('')
              back()
            } else {
              console.log("erro no item insert") 
            }
          } catch(err) {
            // alert(err)
          }
        }else{
          alert("falta preencher")
          
          
        }
      }else{

        try {
          const res = await fetch('/api/cadjobs', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query:jobname,
              titule:inputTitule,
              content:inputContent,
              place:inputPlace,
              img:`${nameImg}`
            }
            ) 
          })
          
          if (res.status === 200) {
            back()
          } else {
            alert('Sorry, something went wrong.')
          }
        } catch(err) {
          alert(err)
        }
      }
  } 
  
  
  


    const handleSubmit = (e) => {
        e.preventDefault();
        addJob()        
    }
    
    console.log()

    return(<>
        <div className="lg:container  lg:mx-auto lg:px-10 p-2">
            <TituleComponent titule={jobname} tituleSpan="" subTitule="Job Selecionado"/>

            <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Titulo</label>
                <input value={inputTitule} onChange={e => setInputTitule(e.target.value)} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              
              <div className="col-span-6 sm:col-span-4">
                <label for="email_address" className="block text-sm font-medium text-gray-700">Conteudo</label>
                <input value={inputContent} onChange={e => setInputContent(e.target.value)} type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>


              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" className="block text-sm font-medium text-gray-700">Local</label>
                <input value={inputPlace} onChange={e => setInputPlace(e.target.value)} type="text" name="postal_code" id="postal_code" autocomplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div  className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Upload  nameImag={nameImg} setImage={setImage}/>
                {nameImg && <div className="mt-2 rounded border-2">
                <div className="p-2 font-semibold">Preview:</div>
                
                <img className="p-2 rounded w-48" src={`/uploads/${nameImg}`}/>
                </div>}
            </div>

            </div>
          </div>
          <button className="w-full p-2 bg-blue-600 border-b-4 border-r-4 rounded-lg border-blue-800 hover:border-blue-500">
                    <span className=" text-center p-2 text-white font-semibold">Salvar</span>    
                </button>
        </div>
      </form>
           
        </div>   
    
    </>)

}




export async function getServerSideProps({ params }) {

  if(params.jobname == 'new'){

    return {
      props: {
        // data: JSON.parse(JSON.stringify(response)),
      },
    };
  
}else{
  const { db } = await connectToDatabase();
  
  var query = { titule: params.jobname };

  const response = await db.collection("jobs").find(query).sort({ metacritic: -1 }).toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(response)),
    },
  };
  
}

  
}