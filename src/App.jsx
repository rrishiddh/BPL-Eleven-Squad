import Banner from "./components/Banner";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header  */}
      <Header></Header>

      {/* banner  */}
      <Banner></Banner>

      {/* available player */}
    </div>
  );
};

export default App;