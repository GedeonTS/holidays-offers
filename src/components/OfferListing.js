import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import OfferTitle from './OfferTitle'
import * as data from "../API/offer.json"
import image from "../assets/sample.jpg"
import './list.css'




function OfferListing() {
    const [offers, setOffers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [visitedCount, setVisitedCount] = React.useState(0)
    
 



    useEffect(() => {
        const interval = setInterval(() => {
            setOffers(data.offers)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (offers.length > 0) {
            setLoading(false)
            setError(false)
        } else {
            setLoading(true)
            setError(true)
        }
    }, [offers])


    if (loading) return < div className='container-loading'><p>Loading...</p></div>
    if (error) return < div className='container-loading'><p>Error :(</p></div>


    return (

        < div className='container'>
            {
                data.offers.map((item, index) =>
                    <OfferTitle
                        id={item.id}
                        name={item.name}
                        imgUrl={image}
                        dateAdded={item.dateAdded}
                        description={item.description}
                        price={item.currency + " " + item.value}
                        visitedCount={item.visitedCount}
                    />
                )
            }
        </div >
    )
}

export default OfferListing