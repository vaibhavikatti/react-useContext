import React, {useState} from 'react'

function usePostApi(){
    const [post,setPost]= useState([])
    return{
        posts: [post,setPost]
    }
}

export default usePostApi