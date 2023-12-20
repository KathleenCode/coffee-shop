// import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Details  from "./pages/Details";
import Cappuccino from "./pages/CappuccinoPage";
import Espresso from "./pages/EspressoPage";
import Latte from "./pages/LattePage";
import Game, { gameLoader } from "./pages/Game";
import './App.css';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/products" element={<Products />}>
      <Route path="cappuccino" element={< Cappuccino /> } />
      <Route path="espresso" element={< Espresso /> } />
      <Route path="latte" element={<Latte />} />
    </Route>
    <Route path="/details" element={<Details />} />
    <Route path="/game" element={<Game />} loader={gameLoader} />
  </Route>
))

function App() {

  return < RouterProvider router={router}/>
}

export default App
