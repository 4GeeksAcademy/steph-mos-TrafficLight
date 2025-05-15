import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Trafficlight from "./Trafficlight";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
        <Trafficlight/>    
		</div>
	);
};

export default Home;