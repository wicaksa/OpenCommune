import React, {useState, setState} from 'react';
import ItemsInNetwork from '../pages/ItemsInNetwork';
import { Link, useLocation } from 'react-router-dom';

class DisplayTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.callAPI = this.callAPI.bind(this);
        this.callAPI();
    }

    callAPI() {
        //Fetch Data From API
        fetch("http://localhost:3001/network/getallnetworks").then(
           (response) => response.json() 
        ).then((data)=>{
            console.log(data);
            this.setState({
                list:data
            })
        })
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            return (
                <tr key={item.networkid}>
                    <td>{item.networkid}</td>
                    <td> {item.networkname}</td>
                    
                    <td><Link to={`/itemsinnetwork/${item.networkid}`} >View Item</Link></td>
                </tr>
            )
        })

        return (
            <div className='container'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>All Networks</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Network ID</th>
                            <th>Network Name</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayTable;