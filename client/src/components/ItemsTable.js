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
                    <td>{items.image}</td>
                    <td><button> Edit Item </button></td>
                </tr>
            )
        })

        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thread>
                        <tr>
                            <th>Items</th>
                            <th><button onClick={AddItem.navigateToAddItem}>Add Item</button></th>
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