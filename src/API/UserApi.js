import React, { useState , useCallback , useEffect } from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

function useUserApi() {
    const [user,setUser] = useState ([])

    const getUsers = useCallback(()=>{
        const readUsers = async () =>{
            const res = await axios.get(`${url}/users`)
            setUser(res.data)
        }

        readUsers()
    },[])

    useEffect(()=>{
        getUsers()
    },[])
  return {
   user: [user, setUser]
  }
}

export default useUserApi