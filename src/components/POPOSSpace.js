import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div className="space">
      <h1>{props.name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images1/${props.image}`} 
       width="400" 
       height="300" 
       alt="Hello" />
      <div>{props.address}</div>
    </div>
  )
}

export default POPOSSpace