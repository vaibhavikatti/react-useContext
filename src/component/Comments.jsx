import React, { useContext } from 'react'
import { DataContext } from '../Context'


function Comments() {
  const context = useContext(DataContext)
  const [comments] = context.commentApi.comments
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h5 className="text-success display-3">Comments</h5>
      </div>
    </div>
    <div className="row">
      {
        comments && comments.map((item,index)=>{
          return(
            <div className="col-md-4 mt-2 mb-2" key={index}>
              <div className="card">
                <div className="card-header">
                  <h5 className="text-dark">{item.id} : {item.name}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                  <li className="list-group-item">
                    <h3 className="text-success"><strong>Email : </strong> {item.email} </h3>
                    </li>
                    <li className="list-group-item">
                    <h3 className="text-warning"><strong>Comment : </strong> {item.body} </h3>
                    </li>
                  </ul>
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

export default Comments
