import React,{useState} from 'react'

function useCommentApi() {
    const [comment ,setComment] = useState([])
  return{
    comments: [comment,setComment]
  }
}

export default useCommentApi
