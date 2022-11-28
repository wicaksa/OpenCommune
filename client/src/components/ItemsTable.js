import React, {useState, setState } from 'react';
import AddItem from './AddItem';

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
        fetch("http://localhost:3001/listeditems/getallitems").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                list:data
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
                </tr>
            )
        })

        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thread>
                        <tr>
                            <th>Items</th>
                            <th><button onClick={AddItem}>Add Item</button></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Information</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Owner</th>
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