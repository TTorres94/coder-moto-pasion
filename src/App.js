import './App.css';
import NavBarContainer from '../src/containers/navBar/navBarContainer'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import ItemCount from './containers/itemCountContainer/itemCountContainer'



function App() {
  return (
    <div>
      <NavBarContainer />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
