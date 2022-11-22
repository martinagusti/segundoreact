import React from "react"


export default function Main(props){
    
    if (props.item.id === 1){
        console.log(props.item.id)
    }
        
         return(
        <div>
            <div className ="section">
                    <img src={props.item.imageUrl} className = "img"/>
                     <h2>{props.item.title}</h2>
                     <a href={props.item.googleMapsUrl} className="enlace" target="_blank">View on Google Maps</a>
             </div>
             
            <hr/>
        </div>
    ) 
        
    
           
            
}