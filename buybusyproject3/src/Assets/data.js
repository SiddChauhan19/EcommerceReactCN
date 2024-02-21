import { useState, useEffect } from "react";

function Datafetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/SiddChauhan19/DummyAPIEcommerce/db')
            .then(response => response.json())
            .then(jsonData => setData(jsonData.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return data;
}

export default Datafetch;
