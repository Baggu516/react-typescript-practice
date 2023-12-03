import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useApi = (url) => {
  const [data,setData]=useState<string>("")
  useEffect(async()=>{
       let a: AxiosResponse<any, any> = await axios.get(uri)
       console.log(a)
       setData(a)
  },[])

  return [data]
}

export default useApi