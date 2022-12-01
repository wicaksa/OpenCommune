import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
export default function ViewItem(props) {
    // const [item, setItem] = useState({
    //     "image": require('./img/calc2_book.jpeg'),
    //     "name": "Calculus II",
    //     "category": "Book",
    //     "information": "published on 2020, very good condition",
    //     "price": 40,
    //     "city": "Seaside",
    //     "state": "CA"
    // })
    const location = useLocation();
    const item = location.state;
    console.log(item)


    return (
        <>

            <div>
                <div>
                    <div className="viewItem" style={{ margin: "auto", width: "50%", padding: "20px", border: "1px solid gray", borderRadius: "15px", backgroundColor: "#ededed"  }}>
                        <h2><strong>{item.name}</strong></h2>
                        <div >
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "20px", margin: "30px" }}>
                                <img src={item.image} />
                                <div style={{ fontSize: "2em", textAlign: "left" }}>
                                    <span><b>Information: </b>{item.information}</span><br />
                                    <br></br>
                                    <span><b>Price: </b>{item.price}</span><br />
                                    <span><b>Location: </b>{item.city}, {item.state}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

