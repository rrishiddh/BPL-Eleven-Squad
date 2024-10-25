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
      

    if (singlePlayerDetails.length < 6){
      if (! isAvailable){
        setSinglePlayerDetails([...singlePlayerDetails,player])
      } else{
        alert('Player Already Added!')
      }      
   }else{
     alert ('Already 6 Players Added!')
   }
  };

  const removePlayer = (id) => {
    const removedPlayer = singlePlayerDetails.find((player) => player.id === id);
    const updatedPlayer = singlePlayerDetails.filter((player) => player.id !== id);
    setSinglePlayerDetails(updatedPlayer)
  }


  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header  */}
      <Header></Header>

      {/* banner  */}
      <Banner></Banner>

      {/* available player */}
      <AvailablePlayers removePlayer={removePlayer} singlePlayerDetails={singlePlayerDetails} addedPlayerDetails={addedPlayerDetails} availablePlayer={availablePlayer} handleAvailablePlayer={handleAvailablePlayer}></AvailablePlayers>
     
      

      {/* footer  */}
      <Footer></Footer>

    </div>
  );
};

export default App;