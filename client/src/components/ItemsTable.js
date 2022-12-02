import React, {useState, setState } from 'react';
import Axios from 'axios';
import EditItem from './EditItem';

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
        let tableData = this.state.list.map((items) => {
            return(
                <tr key={items.itemid}>
                    <td>{items.itemid}</td>
                    <td>{items.itemname}</td>
                    <td>{items.category}</td>
                    <td>{items.information}</td>
                    <td>{items.price}</td>
                    <td>{items.location}</td>
                    <td>{items.image}</td>
                    <td><EditItem/></td>
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