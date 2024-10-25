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
    if(presentCoin > 0){
      const isAvailable = singlePlayerDetails.find(
        previousPlayer => previousPlayer.id === player.id
      )    
  
      if (singlePlayerDetails.length < 6){
        if (! isAvailable){
          setSinglePlayerDetails([...singlePlayerDetails,player])
          const newCoin = presentCoin - player.bid_price;
          setPresentCoin(newCoin);
        } else{
          alert('Player Already Added!')
        }      
     }else{
       alert ('Already 6 Players Added!')
     }
    }else{
      alert ('Claim Free Coin First!')
    }    
  };

  const removePlayer = (id) => {
    const removedPlayer = singlePlayerDetails.find((player) => player.id === id);
    const updatedPlayer = singlePlayerDetails.filter((player) => player.id !== id);
    setSinglePlayerDetails(updatedPlayer);

    const newCoin2 = presentCoin + removedPlayer.bid_price ;
    setPresentCoin(newCoin2);

    
  }

  const[presentCoin,setPresentCoin] = useState(0);
  const increaseCoin = (coin) => {   
    if (presentCoin <= 0){ 
    setPresentCoin(coin);
    }else{
      alert('already coin added')
    }
  };


  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header  */}
      <Header presentCoin={presentCoin}></Header>

      {/* banner  */}
      <Banner increaseCoin={increaseCoin}></Banner>

      {/* available player */}
      <AvailablePlayers removePlayer={removePlayer} singlePlayerDetails={singlePlayerDetails} addedPlayerDetails={addedPlayerDetails} availablePlayer={availablePlayer} handleAvailablePlayer={handleAvailablePlayer}></AvailablePlayers>
     
      

      {/* footer  */}
      <Footer></Footer>

    </div>
  );
};

export default App;