import React, { Component } from 'react'

export default class list extends Component {
    render() {
        console.log(this.props.store);
        const listdata = this.props.store.getState();
         console.log("listdata",listdata);
        return (
            <div className="container"> 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>CreateTime</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                       
                       listdata.map(item =>( 
                           <tr key={item.id}>
                               <td>{item.id}</td>
                               <td>{item.name}</td>
                               <td>{item.ctime}</td>
                           </tr>
                       ))
                       
                       }
                    </tbody>
                </table>
            </div>
        )
    }
}


