import './App.css';
import Header from './components/Header';
import Card from "./components/Card"
import data from "./data.js"




function App() {

  const destinations = data.map((destination) =>{
    return (
      <Card
        {...destination}
      />
    )
  })



  return (
    <div className="App">
      <Header/>
      {destinations}
    </div>
  );
}

export default App;
