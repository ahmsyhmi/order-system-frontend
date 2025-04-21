"use client";
import React, { useEffect, useState } from 'react';

const CakesList = () => {
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCakes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/cakes');
                const data = await response.json();
                setCakes(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cakes:', error);
                setLoading(false);
            }
        };

        fetchCakes();
    }, []);

    if (loading) {
        return <p>Loading cakes...</p>;
    }

    return (
        <div>
            <h1>Cakes List</h1>
            <ul>
                {cakes.map((cake) => (
                    <li key={cake.id}>
                        <h2>{cake.name}</h2>
                        <p>{cake.description}</p>
                        <p>Price: ${cake.price}</p>
                        <p>Stock: {cake.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CakesList;