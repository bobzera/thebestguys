const TituleComponent = ({titule, tituleSpan, subTitule}) => {
   
    return (
      <>
       <div className="text-center py-6">
         <p className="text-gray-500 font-semibold">{subTitule}</p>
         <h1 className="text-blue-900 p-4 text-4xl font-bold">{titule}<span className="font-normal"> {tituleSpan}</span></h1>
         <div className="container mx-auto w-20 border-b-4 p-2 border-blue-600"></div>
       </div>
      </>
    )
};

export default TituleComponent;