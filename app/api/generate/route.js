import clientPromise from "@/lib/mongodb"

export async function POST(req) {

    const body = await req.json()
    const client = await clientPromise;
    const db = client.db("URLshort")
    const collection = db.collection("urls")

    //check is the preferred url already exists
    let test = await collection.findOne({shorturl : body.shorturl})
    if(test){
        return Response.json({ success:false,error : true,message: 'URL already exists' })
    }
    
    //saving the URL in database
    await collection.insertOne({
        url: body.url ,
        shorturl: body.shorturl
    })
  return Response.json({ success:true,error : false,message: 'URL generated' })
}