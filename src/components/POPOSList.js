import POPOSSpace from "./POPOSSpace";
import './POPOSList.css';

function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace 
            name="Rey Bouba"
            address="Rey Bouba, Northern Cameroon"
            image="ReyBouba.jpeg"
        />
        <POPOSSpace 
            name="Kribi La Belle"
            address="Kribi, coastal city"
            image="Kribi.jpeg"
        />
        <POPOSSpace 
            name="Mt Manengouba"
            address="A volcano in the Southwest Province of Cameroon"
            image="montManengouba.jpeg"
        />
        <POPOSSpace 
            name="Buea's Tea"
            address="Tea field of the renowned Cameroonian tea"
            image="TeaFieldBuea.jpeg"
        />
        <POPOSSpace 
            name="Mt Akoakas"
            address="Mount Akoakas towards Ebolowa, South Cameroon"
            image="MontAkoakas.jpeg"
        />
        <POPOSSpace 
            name="Marine Turtles"
            address="Yearly turtle migration in Kribi"
            image="turtles.jpeg"
        />
        <POPOSSpace 
            name="Mayo Moskota"
            address="Far north of Cameroon"
            image="MayoMoskota.jpeg"
        />
        <POPOSSpace 
            name="Campo Port"
            address="One of Cameroon port in the city of Campo"
            image="KribiPort.jpeg"
        />
        <POPOSSpace 
            name="Mount Mbetkpi"
            address="Crater lake of Mount Mbetkpi, Noun region in western Cameroon"
            image="MontMbetkpi.jpeg"
        />
      </div>
    )
  }
  
  export default POPOSList