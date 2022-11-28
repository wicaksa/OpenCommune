import React, {useState, setState } from 'react';

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
                </tr>
            )
        })

        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thread>
                        <tr>
                            <th>Items</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
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