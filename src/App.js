

import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import data from "./data"

  const nuevo = data.filter(item => item.id == 1)
        


export default function App(){
    const main = nuevo.map(item => {
        return (
            <Main
                key={item.id}
                item={item}
            />
        )
    })
            
    
    return(
        <div>
            <Nav />
             <section >
              {main}
            </section>
        
        </div>
        
    )
}
