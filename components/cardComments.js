
const CardComments =  ({data}) => {
    return(   
    <>
        {data.map(({ titule, img, content, local, description }) => (
        <figure className={`rounded-xl p-8 md:p-0 text-blue-900`}>
            <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-bold">
                    {content}
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-cyan-600">
                    {titule}
                </div>
                <div className="text-gray-500">
                    {description}, {local}
                </div>
                </figcaption>
            </div>
        </figure>   
        ))} 
    </>    
    )
}

export default CardComments;