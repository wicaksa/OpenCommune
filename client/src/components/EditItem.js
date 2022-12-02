import React from 'react';
import Axios from 'axios';
import ItemList from './ItemsTable';

class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.retrieveItems = this.retrieveItems.bind(this);
        this.retrieveItems();
    }
    
    retrieveItems() {
        Axios.get('http://localhost:3001/listeditems/itemsinnetwork/1').then(
            (response) => {
                console.log(response.data);
                this.setState({
                    list:response.data
                })
            })
        console.log("test: " + ItemList.createItemList);
    }


    render() {
        // let loggedInUser = localStorage.getItem("userid");
        let loggedInUser = "1d40c280-6c45-11ed-875f-999cbba87337";
        // let loggedInUser = "notcorrect";
        let userMatch = false;
        if (loggedInUser) {
            loggedInUser = loggedInUser;
        }
        console.log("logged in user: " + loggedInUser);

        let data = this.state.list.map((item) => {
            console.log("user listed: " + item.userlisted);
            if (loggedInUser === data.userlisted) {
                userMatch = true;
            }
            console.log("user match: " + userMatch);
        })

        return (
            <div className='container'>
                {userMatch ? (<button> Edit Item </button>) : (<></>)}
            </div>
        )
    }

}

export default EditItem;