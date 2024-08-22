import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components/index';
// import { AddCategory } from './components/AddCategory';
// import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories,setCategories]= useState(['One Punch']);

    const onAddCategory=(newcategory)=>{
      // categories.push(newcategory)
      if( categories.includes(newcategory)) return;
      // console.log(newcategory)
      setCategories([newcategory,...categories])

    }
    

  return (
    <>
        
        <h1>GifExpertApp</h1>
        
        <AddCategory         
          onNewCategory={ event => onAddCategory(event)}
        />

        
        { 
        categories.map( (category) =>(
          // <div key={category} >
          //   <h3>{category}</h3>
          //   <li>{category}</li>
          // </div>
          <GifGrid key={category} category={category}/>
        )) 
        }        
        
            
    </>
  )
}