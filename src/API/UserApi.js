import React, { useState } from 'react'

function useUserApi() {
    const [user,setUser] = useState ([])
  return {
   user: [user, setUser]
  }
}

export default useUserApi