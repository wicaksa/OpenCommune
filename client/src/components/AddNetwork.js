import Axios from '../axios.js';
import React, { useState, setState} from 'react';
import { toast } from 'react-toastify';

 export default function AddNetwork () {
    const [networkName, setNetworkName] = useState('');

    const test = async () => {
        //Fetch Data From API]og(error)
        // console.log(localStorage.getItem("userid"));
        
        await Axios.get('RentalHistory/getAllRentals'
            ).then(function(response){
                console.log(response)
            }).catch(function (error) {
            console.log(error)})
    }

    const getUser = () => {
        Axios.get('user/search', {
            data: {
                userid: localStorage.getItem("userid")
            }
        }).then( function (response) {
            console.log(response)
        }).catch( function (error) {
            console.log(error)
        })

        //Fetch Data From API]og(error)
        // let body = {"userid": localStorage.getItem("userid")};
        // console.log(body);

        // let parsedBody = JSON.stringify(body);
        // console.log("parsed body: " + parsedBody)

        // let str = parsedBody.replace(/\\"/g, "")
        // console.log(str)

        // let newBody = JSON.parse(str)
        // console.log(newBody)
        
        // Axios.get('User/search', {newBody
        //     }).then(function(response){
        //         console.log(response.data)
        //     }).catch(function (error) {
        //     console.log(error)});
    }

    const addNetwork = () => {
        // console.log(localStorage.getItem("userid"));
        Axios.post('http://localhost:3001/network/create',
                {
                    "networkname" : networkName,
                    "networkadmin" : localStorage.getItem("username")
                
            }).then((response) => {
            console.log(getUser() + "getuser");
            console.log(response + "response");
            if (response.status===200) {
                toast.success(response.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                toast.error("Unable to Create New Network.", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    return (
        <div className='container'>
                <table className="table table-striped">
                    <tbody>
                        <th>Add Networks</th>
                        <tr>
                            <td>
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Network</label>
                            </td>
                            <td>
                                <input class="form-control form-control-sm" placeholder="Add Network Name" onChange={(e)=>{ setNetworkName(e.target.value);}}></input>
                            </td>
                            <td>
                                <button onClick={getUser}>Add Network</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}