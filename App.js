import React, { useEffect, useState } from "react";
const App = () => {

  const [music,setMusic] = useState([])

  const getMusic = async () => {
    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'f611144f31msh520e369d1559a68p126b45jsn4f23a0e4f9bd',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setMusic(result);
} catch (error) {
	console.error(error);
} 
  }

  useEffect(()=>{
    getMusic()
  },[])

  return (
    <div>
      {music?.users?.items?.map((musicData)=>{
        return <>
         <img src={musicData?.data?.image?.largeImageUrl}/>
        </>
      })}
    </div>
  )
}
export default App;