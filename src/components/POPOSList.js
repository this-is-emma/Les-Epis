import POPOSSpace from "./POPOSSpace";
import data from '../cameroon-data.json'
import './POPOSList.css';

function POPOSList() {

    const spaces = data.map(( { title, address, images, hours }, i) => {
        return (
          <POPOSSpace
            id={i}
            key={title}
            name={title} 
            address={address}
            image={images[0]}
            hours={hours}
          />
        )
      })
  
    return (
      <div className="POPOSList">
        { spaces }
      </div>
    )
  }
  
export default POPOSList