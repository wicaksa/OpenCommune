import React, {useState, setState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ItemsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.createItemList = this.createItemList.bind(this);
        this.createItemList();
        
    }

    createItemList() {
        Axios.post('http://localhost:3001/listeditems/itemsinnetwork', {"networkid": this.props.networkid}).then(
            (response) =>{
                    console.log(response.data);
                    this.setState({
                        list:response.data
                    })
        })
    }

    render() {
        let loggedInUser = localStorage.getItem("userid") || "";
        let userMatch = false;

        let tableData = this.state.list.map((items) => {
            let ulisted = JSON.stringify(items.userlisted);

            if (loggedInUser === ulisted) {
                userMatch = true;
            }
            if (loggedInUser !== ulisted) {
                userMatch = false;
            }
           
            return(
                <tr key={items.itemid}>
                    <td>{items.itemid}</td>
                    <td>{items.itemname}</td>
                    <td>{items.category}</td>
                    <td>{items.information}</td>
                    <td>{items.price}</td>
                    <td>{items.location}</td>
                    <td><Link to="/viewfromlist" state={{state: items}}>
                            View Item
                        </Link>
                    </td>
                    
                    {userMatch ? (<button> Edit Item </button>) : (<></>)}
                </tr>
            )
        })

        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thread>
                        <tr>
                            <th>Items</th>
                            <th>
                                <a href="/addItem">
                                    <button> Add Item </button>
                                </a>
                            </th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Item ID</th>            
                        </tr>
                    </thread>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ItemsTable;