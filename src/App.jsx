import {  useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
    const[availablePlayer,setAvailablePlayer] = useState("available");

    const handleAvailablePlayer = (status) => {    
       setAvailablePlayer(status);
    };
    
  const[singlePlayerDetails, setSinglePlayerDetails]   = useState([]);
  const addedPlayerDetails = player => {
    const isAvailable = singlePlayerDetails.find(
      previousPlayer => previousPlayer.id === player.id
    )
      if (! isAvailable){
      setSinglePlayerDetails([...singlePlayerDetails,player])
    } else{
      alert('Player Already Added!')
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header  */}
      <Header></Header>

      {/* banner  */}
      <Banner></Banner>

      {/* available player */}
      <AvailablePlayers singlePlayerDetails={singlePlayerDetails} addedPlayerDetails={addedPlayerDetails} availablePlayer={availablePlayer} handleAvailablePlayer={handleAvailablePlayer}></AvailablePlayers>
     
      

      {/* footer  */}
      <Footer></Footer>

    </div>
  );
};

export default App;