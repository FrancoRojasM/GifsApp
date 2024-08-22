import React from 'react'
import { useEffect, useState } from 'react';
import { GifItem } from './GifItem.jsx';
// import {getGifs} from '../helpers/getGifs.js'
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({isLoading})
    // const [images,setImages]=useState([]);

    
    // const getImages =async()=>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }
    // // useEfect me regresa una funcion
    // useEffect(()=>{
    //     getImages();
    // },[]);
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                ?(<h2>Cargando...</h2>)
                :null
            }
            
            <div className='card-grid'>
            {
                images.map((image)=>(
                   <GifItem key={image.id} {...image} />
                ))
            }

            </div>

            
        </>
    )
}


