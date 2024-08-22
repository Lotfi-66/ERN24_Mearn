import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios.get('http://localhost:5000/api/items');
            setItems(res.data);
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h2>Items:</h2>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;