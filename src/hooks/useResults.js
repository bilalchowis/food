import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

 export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')    
    
    async function fetch(searchTerm) {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => { fetch('pasta') }, [])

    return [fetch, results, errorMessage]
 }