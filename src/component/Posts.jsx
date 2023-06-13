import React, { useContext } from 'react'
import { DataContext } from '../Context'


function Posts() {
  const context = useContext(DataContext)
  const [posts] = context.postApi.posts
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className="display-3 text-success">Users</h3>
      </div>
    </div>
    <div className="row">
      {
        posts && posts.map((item,index)=>{
          return(
            <div className="col-md-4 mt-2 mb-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <h3 className="text-info">{item.body}</h3>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Posts
