const CardServices = ({data}) => {  
  
  return (
    <>
     <div>
          {data.map(({ titule, img, content }) => (
         <div className="m-4 my-10 p-2 items-center text-center" key={titule}>
             <div className="">
                  <img className="mx-auto rounded-full w-32 h-32" src={img}/>
             </div>
             <div className="py-4">
                 <h1 className="text-blue-900 text-xl font-bold py-2">{titule}</h1>
                 <p className="text-gray-500">{content}</p>
              </div>
         </div>
          ))}
     </div>
    </>
  )
};

export default CardServices;