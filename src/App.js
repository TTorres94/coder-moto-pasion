import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBarContainer from '../src/containers/navBar/navBarContainer'
import HomePageContainer from './containers/homePageContainer/homePageContainer'
import ItemCount from './containers/itemCountContainer/itemCountContainer'
import ItemDetail from './components/itemDetail/itemDetail'
import NuevasPageContainer from './components/nuevasPage/nuevasPageContainer'
import UsadasPageContainer from './components/usadasPage/usadasPageContainer'



function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />


      <Switch>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route path='/categories/:categoriesId'>
          <ItemDetail />
        </Route>
        <Route path='/nuevas'>
          <NuevasPageContainer/>
        </Route>
        <Route path='/usadas'>
          <UsadasPageContainer />
        </Route>

        <ItemCount />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
