import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import ViewItem from './ViewItem';
const items = require('./SampleItems');
const axios = require('axios').default;

export default function Cardrow() {
    const [cards, setCards] = useState([])

    async function getCards() {
        const URI = "http://localhost:3001/listeditems/getallitems";
        try {
            const res = await axios.get(URI);
            console.log(res);
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = axios.get("http://localhost:3001/listeditems/getallitems");
        const newData = await response.json();
        console.log(newData);
      }
    
      return () => {
        <p>Hi</p>
      }
    }, [])
    
    const itemElements = items.map((item) => {
        return <Card props={item} />
    })

    return (
        <>
            <div className="cardrow">
                <h2>Check out some of the latest items!</h2>
                <div >
                    {itemElements}
                    
                </div>
            </div>
        </>
    )
}
