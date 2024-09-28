import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import Spinner from './Spinner';
import UseGif from './UseGif';


export default function Random() {
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState('false')

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data} = await axios.get(url);
  //   const imageSourse = data.data.images.downsized_large.url;
  //   console.log(imageSourse)

  //   setGif(imageSourse);
  //   setLoading(false);
  // }
  // useEffect( () =>{
  //   fetchData();
  // },[])

  // ----------------Beacuse there were similarity in code of random and tag js we created a custom hook-----------------
  const {gif, loading, fetchData} = UseGif();


  function clickHandler(){
    fetchData();
  }
  return(
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]
      '>
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase' >A Random Gif</h1>

        {
           loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        <button onClick={clickHandler} 
          className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[10px]'
        >Generate</button>
    </div>
  )
}
