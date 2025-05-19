import React, { useEffect,useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('http://api.github.com/users/jignesh1001')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
  }, [])
   
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='profile' width={300} height={10}/>
    </div>
  )
}

export default Github