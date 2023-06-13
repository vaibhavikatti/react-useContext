import React,{useContext} from 'react'
import { DataContext } from '../Context'

function Users() {
  const context = useContext(DataContext)
  const [users] = context.userApi.user
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Users</h3>
        </div>
      </div>
      <div className="row">
      {
        users && users.map((item,index)=>{
          return(
            <div className="col-md-4 mt-2 mb-2 text-center" key={index}>
              <div className="card">
                <div className="card-header">
                  <h4 className="text-success">{item.name} </h4>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong className='float-start'>Email</strong>
                      <span className="text-success float-end">{item.email}</span>
                    </li>
                    <li className="list-group-item">
                      <strong className='float-start'>Phone-Number</strong>
                      <span className="text-success float-end">{item.phone}</span>
                    </li>
                    <li className="list-group-item">
                      <strong className='float-start'>Website</strong>
                      <span className="text-success float-end">{item.website}</span>
                    </li>
                    <li className="list-group-item">
                      <strong className='float-start'>City</strong>
                      <span className="text-success float-end">{item.address.city}</span>
                    </li>
                    <li className="list-group-item">
                      <strong className='text-success'><span className="text-dark">Company</span> : {item.company.name}</strong>
                      <ul className="list-group">
                        <li className="list-group-item">
                        <strong>Base</strong> :  {item.company.bs}
                        </li>
                        <li className="list-group-item">
                         <strong>CatchPhrase</strong>: {item.company.catchPhrase}
                        </li>
                      </ul>
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

export default Users
