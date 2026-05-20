import HeaderSection from './../headerSection/HeaderSection';
import DestinationCard from './../destinationCard/DestinationCard';
const DestinationSection = () => {
  const destinations = [
    {id:Math.random().toString(), name:"Santorini beach",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nesciunt quibusdam, deleniti reiciendis voluptates tenetur." ,image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {id:Math.random().toString(), name:"Santorini beach",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nesciunt quibusdam, deleniti reiciendis voluptates tenetur." ,image:"https://img.magnific.com/free-photo/stony-beach-landscape_23-2151716247.jpg?t=st=1725502861~exp=1725506461~hmac=417fe6e26a3bed196bf234e893ec93a833ce169aafc79523558f7343a754070e&w=1060"},
    {id:Math.random().toString(), name:"Santorini beach",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nesciunt quibusdam, deleniti reiciendis voluptates tenetur." ,image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
  ];
  return (
    <div className='destination_section y_padding x_padding '>
      <HeaderSection title="The Destination"/>
        <div className="destination_section_cards">
          {destinations.map((ele)=>{
            return <DestinationCard key= {ele.id} title={ele.name} description={ele.description} image={ele.image}/>
          })}
        </div>
    </div>
  )
}
export default DestinationSection