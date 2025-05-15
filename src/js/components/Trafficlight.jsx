import React, {useState} from 'react'

const Trafficlight = () => {


const [Color, setColor] = useState ("red")   
const [colorsList, setcolorsList] = useState (["red","yellow", "green"])

const LightOn = (selectedColor) => {
    setColor(selectedColor)
};


function ChangeLight() {

        const FirstList = colorsList.indexOf(Color);
        const SecondList = (FirstList + 1) % colorsList.length;
        setColor(colorsList[SecondList]);
    }

const AddPurple = () => {
        if (!colorsList.includes("purple")) {
            setcolorsList([...colorsList, "purple"]);
        }
    };



  return (

    <div className='Trafficlight'>
        
        <div className='Trafficback'>
           
            {colorsList.map((glowColor,index) => (

                 <div 
                    key={index}
                    className= {`light ${glowColor} ${Color === glowColor ? "glow" : ""}`}
                    onClick={()=> LightOn (glowColor)}
                >
                
            </div>

            ))}

        </div>
        
        <div>
            <button className="btn" onClick={ChangeLight}>Change light </button>
        </div>
        
        <div>
            <button className="btn" onClick={AddPurple}> Add purple</button>
        </div>

    </div>
  

)
}

export default Trafficlight