import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = ({data}) => {
  
    return (
      <>
        <Slide easing="ease" arrows={false}>
        {data.map(({ titule, img, content }) => (
          <div key={titule} className="each-slide">
            <div style={{'backgroundImage': `url(${img})`}}>
              <div className="p-2 py-8 m-2 border-l-4 border-blue-600 text-white bg-black bg-opacity-60">
                <h1 className="p-2 text-5xl font-bold">{titule}</h1>
                <p className="p-2 pb-8 font-semibold">{content}</p>
                <a className="p-2 px-4 cursor-pointer m-2 bg-blue-600 text-white rounded-md">See More</a>
              </div>
            </div>
          </div>  
          ))}         
        </Slide>
      </>
    )
};

export default Slideshow;