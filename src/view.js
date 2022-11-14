import React from 'react'

      export default function View({categoryList}) {
  return (
    <div>
        {
            categoryList.map((item)=>
            {
                return(
                    <div style={{border: "2px solid yellow", borderRadius: '5px', 
                    width:"300px", alignContent:"center", textAlign:"center", justifyContent: 'center',marginLeft: '230px'}}>
                         <h4>Title: {item.title}</h4> 
                         <h4>url: <a  href={item.url} target="_blank">{item.url}</a></h4>
                         <h4>Category: {item.category}</h4>
                    </div>
                )
            }
            )
        }
    </div>
  )
}
