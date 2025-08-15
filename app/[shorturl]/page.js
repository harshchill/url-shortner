import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation";

export default async function Page({ params }) {

    const { shorturl } = await params
    const client = await clientPromise;
    const db = client.db("URLshort")
    const collection = db.collection("urls")

    //check is the preferred url already exists
    const exists = await collection.findOne({shorturl : shorturl})
    if(exists){
        redirect(exists.url)
    }else{
        redirect("/")
    }




    return <div>My Post: {shorturl}</div>
  }