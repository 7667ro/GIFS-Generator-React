import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import Spinner from './Spinner';
import UseGif from './UseGif';

export default function Tag() {
  // const [gif, setGif] = useState('');
  const [tag, setTag] = useState('');
  // const [loading, setLoading] = useState('false')

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data} = await axios.get(url);
  //   const imageSourse = data.data.images.downsized_large.url;
  //   console.log(imageSourse)

  //   setGif(imageSourse);
  //   setLoading(false);
  // }
  // useEffect( () =>{
  //   fetchData();
  // },[])
  const {gif, loading, fetchData} = UseGif(tag)
  function clickHandler(){
    fetchData();
  }
  function changeHandler(event){
    setTag(event.target.value);
  }
  return(
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]
      '>
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase' >Random {tag} Gif</h1>

        {
           loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }

        <input
          className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={changeHandler}
          value={tag}
        />
        <button onClick={clickHandler} 
          className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[10px]'
        >Generate</button>
    </div>
  )
}
