import {  useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    
  const[availablePlayer,setAvailablePlayer] = useState("available");

  const handleAvailablePlayer = (status) => {    
       setAvailablePlayer(status);
  }; 
    
  const[singlePlayerDetails, setSinglePlayerDetails]   = useState([]);
  const addedPlayerDetails = player => {
    if(presentCoin > 0){
      if(presentCoin <= 0){
        toast.warn("Claim Free Coin First!", {
        position: "top-center"});
      }else{        
      const isAvailable = singlePlayerDetails.find(
        previousPlayer => previousPlayer.id === player.id
      )    
  
      if (singlePlayerDetails.length < 6){
        if (! isAvailable){
          setSinglePlayerDetails([...singlePlayerDetails,player])
          const newCoin = presentCoin - player.bid_price;
          setPresentCoin(newCoin);
          toast.success(`${player.name} is Added to Your Team!`, {
            position: "top-center"});
        } else{
          toast.error("Player Already Added!", {
            position: "top-center"});
        }      
     }else{
       toast.warn("Already 6 Players Added!", {
        position: "top-center"});
     }
    
      }
    }else{
      toast.warn("Claim Free Coin First!", {
        position: "top-center"});
    }    
  };

  const removePlayer = (id) => {
    const removedPlayer = singlePlayerDetails.find((player) => player.id === id);
    const updatedPlayer = singlePlayerDetails.filter((player) => player.id !== id);
    setSinglePlayerDetails(updatedPlayer);

    const newCoin2 = presentCoin + removedPlayer.bid_price ;
    setPresentCoin(newCoin2);

    toast.warn(`${removedPlayer.name} is Removed!`, {
      position: "top-center"});
    
  }

  const[presentCoin,setPresentCoin] = useState(0);
  const increaseCoin = (coin) => {   
    
      toast.success("Free Coin Added!", {
        position: "top-center"});
    setPresentCoin(prevCoin => prevCoin + coin);
   
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

    {/* React-Toastify  */}
      <ToastContainer/>
    </div>
  );
};

export default App;