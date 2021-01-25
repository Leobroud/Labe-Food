import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../screens/Home/Home'
import SignUp from "../screens/Login/SignUp"
import Busca from "../screens/Home/Busca"
import Address from "../screens/Login/Address"
import Restaurant from "../screens/Restaurant/RestaurantPage"
import Cart from "../screens/Cart/Cart"
import Profile from "../screens/Profile/Profile"
import ProfileEdit from "../screens/Profile/ProfileEdit"
import ProfileEditAddress from "../screens/Profile/ProfileEditAddress"
import Login from "../screens/Login/Login"
import React from 'react';
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import Footer from "../Components/Footer/Footer"

function Router(props) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/home'>
            <Home/>
            <Footer/>
          </Route>
          
          <Route exact path='/home/busca'>
            <Busca/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/'>
            <HomeScreen/>
          </Route>

          <Route exact path='/cadastrar'>
            <SignUp/>
          </Route>

          <Route exact path='/cadastrar/endereco'>
            <Address/>
          </Route>

          <Route exact path='/restaurante/:id'>
            <Restaurant formatOrders={props.formatOrders} />
          </Route>

          <Route exact path='/carrinho'>
            <Cart orderData={props.orderData} formatOrders={props.formatOrders} setOrderData={props.setOrderData} />
            <Footer/>
          </Route>

          <Route exact path='/perfil'>
            <Profile/>            
            <Footer/>
          </Route>

          {/* Alterei rota para a página de edição dos dados pessoais */}
          <Route exact path='/perfil/editar/dados-pessoais'>
            <ProfileEdit/>
          </Route>
          
          <Route exact path='/perfil/editar/endereco'>
            <ProfileEditAddress/>
          </Route>

          {/* Adicionei rota para a página de erro */}
          <Route>
            <div>ERRO 404 - Página não encontrada</div>
          </Route>

        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;

