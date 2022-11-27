import Axios from 'axios';
import React, { useState, setState} from 'react';
import { toast } from 'react-toastify';

const AddNetwork = () => {
    const [networkName, setNetworkName] = useState('');
    const [networkAdmin, setNetworkAdmin] = useState('');

    


    async function getUser() {    
        const id = localStorage.getItem("userid");
                
    try{
        const response = await Axios.post("http://localhost:3001/user/search", {
            data:
                {
                    userid: "76122936-5c8b-11ed-9b6a-0242ac120002"
                },
                xsrfHeaderName: "X-CSRFToken",
                withCredentials: false,
            })
        } catch(e) {
            console.log(e);
        }
    }
        
    

    const addNetwork = () => {
        // console.log(localStorage.getItem("userid"));
        Axios.post('http://localhost:3001/network/create',
                {
                    "networkname" : networkName,
                    "networkadmin" : "js0001"
                
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

export default AddNetwork;