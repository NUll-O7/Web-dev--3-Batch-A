import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Card title='Apple' description="Mackbook Pro 2020"/>
      <Card title='Nike' description='Shoes'/>
      <Card title='Home Applicance' description='Television'/>
      <Card title='Sunglasses' description='Rayban Glasses' />
    </>
  );
}

export default App;
