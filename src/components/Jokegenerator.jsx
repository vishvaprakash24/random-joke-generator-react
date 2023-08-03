import React, {useEffect, useState} from 'react'
import "./jokegenerator.css"

const jokegenerator = () => {

  const [jokes, setJokes] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchJokes = async()=>{
    setIsLoading(true)
    const res = await fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=249d54c1d86172ff0222cdb9a47c")
    const data = await res.json();
    setJokes(data);
    setIsLoading(false)
  };
  useEffect(()=>{
    fetchJokes();
  }, [])
  return (
    <>
    <div className='jokeapp'>
      <h1>Joke Generator App<br/>😂😂</h1>
      {isLoading? <h3>Loading...</h3> : <p>{jokes.jokeContent}</p>}
      
      <button className="button-20" onClick={fetchJokes}>Generate New Joke</button>
    </div>
    </>
    
  )
}

export default jokegenerator
