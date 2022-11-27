import Axios from '../axios.js';
import React, { useState, setState} from 'react';
import { toast } from 'react-toastify';

 export default function AddNetwork () {
    const [networkName, setNetworkName] = useState('');
    const [adminName, setAdminName] = useState('');

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
        
        console.log(localStorage.getItem("userid"))
        let body ={
            data: {
                userid: localStorage.getItem("userid")
            }}
            
        let parsedBody = JSON.stringify(body);
        console.log("parsed body: " + parsedBody)
        let str = parsedBody.replace(/\\"/g, "")


        console.log(str)
            
        let newBody = JSON.parse(str)
        console.log(newBody)
        Axios.post("/user/search", newBody
        ).then( function (response) {
            setAdminName(response.data.username);
        }).catch( function (error) {
            console.log(error)
        })

    }

    const addNetwork = () => {
        // console.log(localStorage.getItem("userid"));
        Axios.post('/network/create',
                {
                    "networkname" : networkName,
                    "networkadmin" : adminName
                
            }).then((response) => {

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
                                <button onClick={addNetwork}>Add Network</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}