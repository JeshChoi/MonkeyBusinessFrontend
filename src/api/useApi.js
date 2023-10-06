import { useState, useEffect } from "react";

const useApi = (url, authToken) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${authToken}`,
            "Content-Type": "application/json;charset=UTF-8",
        },
        };

    const fetchApi = async () => {
        await fetch(url, options)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setLoading(false)
            setData(json)
        })
    }

    useEffect(() => {
        fetchApi();
    },[])

    return {loading, data}
}

export default useApi;