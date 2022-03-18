import './Styles/css/App.css';
import Header from './Components/header';
import Collapsible from 'react-collapsible';
import ArrowsImg from './Components/arrows';
import drinkCategories from './Data/drinkCategories.json';
import SingleDrink from './Components/singleDrink';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Collapsible trigger={<ArrowsImg />}>
        {drinkCategories.map((item) => <SingleDrink
          key = {item.id}
          title = {item.title}
          description = {item.description}
          class = {item.class}
          api = {item.api}
        />)}
      </Collapsible>
      <Footer />
    </div>
  );
}

export default App;
