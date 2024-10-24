import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";

const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header  */}
      <Header></Header>

      {/* banner  */}
      <Banner></Banner>

      {/* available player */}
      <AvailablePlayers></AvailablePlayers>

      {/* player card  */}
      <PlayerCard></PlayerCard>

      {/* newsletter  */}

      {/* footer  */}
      <Footer></Footer>

    </div>
  );
};

export default App;