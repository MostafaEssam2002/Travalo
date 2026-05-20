//image_path:"https://img.magnific.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243967.jpg?t=st=1779014191~exp=1779017791~hmac=b7cf116c63d099b618f67206f3615f52d7cfbaec4068c4b21d5c421901cbbd91&w=1480"},
//image_path:"https://img.magnific.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243975.jpg?w=740&q=80"},
//image_path:"https://img.magnific.com/premium-photo/abstract-uv-ultraviolet-light-composition_23-2149243985.jpg?w=1480"}
const DestinationCard = (props) => {
  return (
    <div className='destination_card'>
      <div className='destination_card_image'>
        <img src={props.image} alt="Destination" />
      </div>
      <div className="destination_card_description">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default DestinationCard