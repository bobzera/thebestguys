import { connectToDatabase }  from "../../util/mongodb"

export default async (req, res) =>{ 
  
  if (req.method === "POST"){

    const { titule, content, place, img} = req.body;    
    
    if(!titule){
      res.status(400).json({error: "Missing Value titule"})
      return
    }
    
    // teste
    const { db } = await connectToDatabase();
    
    const response = await db.collection("jobs").insertOne({
     titule,
     content,
     place,
     img
    })   

    res.status(200).json(response.ops[0])    
  } 

  if (req.method === "get"){

    const { place } = req.body;    
    
    console.log( place)
    const { db } = await connectToDatabase();
    
    var query = { place: place };

    const response = await db.collection("jobs").find(query).sort({ metacritic: -1 }).toArray();

    res.status(200).json(response)    
  } 

  if (req.method === "DELETE"){

    const titule = req.body;
       
    const { db } = await connectToDatabase();

    const response = await db.collection("jobs").deleteOne(titule, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
    });

    res.status(200).json({delete: "1 document deleted"})    
    
  }

  if (req.method === "PUT"){

    const  { query,titule, content, place, img } = req.body;
    
    const { db } = await connectToDatabase();

    const response = await db.collection("jobs").updateOne({"titule": query}, {
      $set:{
        titule:titule,
        content:content,
        place:place,
        img:img
      }}, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });

    res.status(200).json({delete: "1 document updated"})    
    
  }

}
