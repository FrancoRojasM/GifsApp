import React from 'react'
import { useEffect, useState } from 'react';

import {getGifs} from '../helpers/getGifs.js'

export const useFetchGifs = (category) => {

    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    
    const getImages =async()=>{
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    }
    // useEfect me regresa una funcion
    useEffect(()=>{
        getImages();
    },[]);

  return {
    // images: images,
    // isLoading: isLoading,
    
    // ECNASCRIPT6
    images,
    isLoading,
  }
}

