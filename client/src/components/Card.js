import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    const sample = {
        "image": require('./img/calc2_book.jpeg'),
        "name": "Calculus II",
        "category": "Book",
        "information": "published on 2020, very good condition",
        "price": 40,
        "city": "Seaside",
        "state": "CA"
    }
    const item = props.props;
    const navigate = useNavigate();
    const toViewItem = () => {
        navigate('/viewitem', {state: item});
    }


    return (
        <>
        <a onClick={()=>{toViewItem()}}>
        <div className="card" style={{width: "250px", height: "350"}}>
            <img className="cardImage" src={item.image} alt={item.name} style={{ height: "200px", width: "auto", padding: "15px", borderBottom: "1px solid lightgray", objectFit:"cover"}}/>
            <div className="container">
                <h5 style={{ marginTop:"10px" }}><b>{item.name}</b></h5>
                <p style={{ height: "2em" }}>{item.information}</p>
            </div>
        </div>
        </a>
        </>
    )
}
