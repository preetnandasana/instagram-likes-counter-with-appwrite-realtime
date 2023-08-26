import React, { useEffect, useState } from 'react'
import "../css/card.css"
import image from "../assets/image.png"
import { appwriteclinet, databases } from '../appwrite/congfig';


function Card() {

    const [likes,setLikes] = useState();

    appwriteclinet.subscribe('databases.databaseId.collections.collectionId.documents.DocumentId',(res)=>{
        setLikes(res.payload.likes)
    },(err)=>{
        console.log(err)
    })

   useEffect(()=>{
        databases.listDocuments("databaseId","collectionId").then(
            function(res)
            {
                setLikes(res.documents[0].likes)
            },
            function(err)
            {
                console.log(err)
            }
        )
   },[])

   const liked = (e)=>{
        e.preventDefault();
        
        
        databases.updateDocument("DatabaseId","CollectionId","DocumentId",{likes:likes+1}).then(
            function(res){
                setLikes(likes+1);
                console.log("Liked")
            },
            function(err)
            {
                console.log(err)
            }

        )
   }

  return (
    <div>
        <div className="card">
        <div className="top">
            <div className="userDeatils">
                
                <h3>cswale.in<br/></h3>
            </div>
            
        </div>
        <div className="imgBg">
            <img src={image} alt="bg" className="cover"/>
        </div>
        <div className="btns">
            <div className="left">
               <button  className="like-button" onClick={liked}>Like</button>
            </div>
           
        </div>
        <h4 className="likes">{likes} likes</h4>
        <h4 className="message">
           
            <span>#cswale.in</span><br/>
            <span>#informative_blogs</span>
        </h4>
        <h4 className="comments">View all 1K comments</h4>
       
        <h5 className="postTime">5 hours ago</h5>
    </div>
    </div>
  )
}

export default Card