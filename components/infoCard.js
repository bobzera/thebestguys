const InfoCard = () => {
  
    const data = [
        {titule:"Instagram", img:"icons/instagram.svg", content:"@thebestguys.co.uk"},
        {titule:"E-Mail", img:"icons/email.svg", content:"office@thebestguys.co.uk"},
        {titule:"Phone", img:"icons/phone.svg", content:"07759 031128"}
    ]
    return (
      <>
       <div className="bg-blue-50 rounded shadow-xl m-4 p-4">
            {data.map(({ titule, img, content }) => (
           <div className="flex items-center my-6" key={titule}>
               <div className="bg-blue-900 rounded-full p-2">
                    <img className="w-8 h-8" src={img}/>
               </div>
               <div className="pl-4">
                   <h1 className="text-blue-900 text-xl font-bold">{titule}</h1>
                   <p className="text-gray-500">{content}</p>
                </div>
           </div>
            ))}
       </div>
      </>
    )
};

export default InfoCard;