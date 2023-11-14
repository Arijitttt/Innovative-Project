import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try{
      const response = await fetch('http://localhost:5000/react')
      const jsonData = await response.json();
      setData(jsonData)
    }catch(error){
      console.log('Error', error);
    }
  }

  return (
    <>
<p><i>Connection Done</i></p>
      <h3>{data.message}</h3>
    </>
  )
}

export default App
