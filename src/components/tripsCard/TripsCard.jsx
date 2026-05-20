import React from 'react'

const TripsCard = () => {
  return (
    <div className='trips_card' >
      <div className="trips_card_image">
        <img src="https://img.magnific.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243975.jpg?w=740&q=80" alt="" />
      </div>
      <div className="trips_card_description">
        <h4>Trip Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis, architecto earum dignissimos ea voluptatum.</p>
      </div>
        <div className="trips_card_btn">
          <h6>Details</h6>
        </div>
    </div>
  )
}

export default TripsCard