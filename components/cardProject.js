
const CardProject = ({data}) => {  
  
  return (
    <>
          {data.map(({ titule, img, content, place }) => (
         <div className="m-4 bg-white my-10" key={titule}>
             <div className="">
                  <img className="w-full" src={`${img}`}/>
             </div>
             <div className="p-4">
                 <h1 className="text-blue-900 text-xl font-bold py-2">{titule}</h1>
                 <p className="text-gray-500">{content}</p>
                 <p className="text-gray-500 pt-4">{place}</p>
              </div>
         </div>
          ))}
    
    </>
  )
};

export default CardProject;

