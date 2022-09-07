import { useEffect, useState } from 'react';
import axios from "axios"

axios.defaults.baseURL = "https://opentdb.com" ;

function useAxios({ url }) {
    let [reponse, setResponse] = useState(null);
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(true);

    useEffect(()=> {
        let fetchData = ()=> {
            axios.get(url)
            .then(res => setResponse(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
        fetchData()
    }, [url]);


  return { reponse, error, loading }
}

export default useAxios