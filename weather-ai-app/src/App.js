
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import WeatherDetails from "./components/WeatherDetails";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
          <Header />
          <SearchBar />
          <CurrentWeather />
          <WeatherDetails />
          <Forecast />
    </div>
  );
}

export default App;
