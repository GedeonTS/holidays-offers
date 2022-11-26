import React from 'react'


function OfferTitle({
    id,
    name,
    imgUrl,
    dateAdded,
    description,
    price,
    visitedCount
}) {
    return (
        <div>
            <img src={imgUrl} alt="gift" className="gift-image" />
            <div className='descritption-container'>
                <div className='visited-count' style={id % 2 === 0 ? { background: "red" } : { background: "yellow" }}>
                    <p style={{ margin: '0', marginLeft: '1rem', padding: '0' }}>{"visited:" + visitedCount}</p></div>
                <p className='gift-title'>{name}</p>
                <p className='price'> {price}</p>
                <p>{description}</p>
            </div>
        </div >
    )
}

export default OfferTitle