import React from "react"
import Uppy from "@uppy/core"
import { DragDrop } from "@uppy/react"
import ThumbnailGenerator from "@uppy/thumbnail-generator"
import XHRUpload from "@uppy/xhr-upload"

const ImageUpload = ({setImage}) => {   

    const uppy = new Uppy({
   

        meta: { type: "iphoneAdPix" },
        restrictions: {
          maxNumberOfFiles: 3,
          maxFileSize: 1048576 * 4,
          allowedFileTypes: [".jpg", ".jpeg", ".png"],
        },
        autoProceed: true,
      })
      
      
      
      uppy.use(XHRUpload, {
        endpoint: "/api/adPix",
        fieldName: "iphoneAdPix",
        formData: true,
      })
      
      
      
      uppy.on("complete", result => {
        const url = result.successful[0].uploadURL
        const name = result.successful[0].name
        setImage(name)
       
      })
      
      uppy.on("error", error => {
        console.error(error.stack)
      })
      
      uppy.on("restriction-failed", (file, error) => {
        const err = error.stack.includes("exceeds maximum allowed size of 4 MB")
          ? "tamanho excedido"
          : error
      
        alert(
            err +
            "\n" +
            file.name +
            " MB : " +
            Math.round(file.size / 1024 / 1024) +
            "MB"
        )
      })
      
    uppy.use(ThumbnailGenerator, {
        // id: 'ThumbnailGenerator',
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        thumbnailType: 'image/jpeg',       
        waitForThumbnailsBeforeUpload: false,
      })
      
     uppy.on("thumbnail:generated", (file, preview) => {
      
      })


  return (<>
    <div className="p-2">

      <DragDrop
        uppy={uppy}
        locale={{
          strings: {            
            dropHereOr: "Image Here",            
            browse: "teste",
          },
        }}
      />      
      
    </div>
    
  </>)
}

export default ImageUpload