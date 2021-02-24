
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/ContainerFooter';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ProductPage from './components/productPage/ContainerProductPage';
import Shop from './components/Shop/ContainerShop';




function App(props) {

  return <div className="Wrapper-App">


<div className="Container-app">

  <Header/>
      
      <div className="Change-content">
      <Redirect from ="/" to="/main"></Redirect>
      <Route path="/main" render = {()=><Main/> }></Route> 
        <Route path ="/productPage" render={()=><ProductPage/>}/>
        <Route path="/Shop" render={()=><Shop/>}></Route>
      </div>
   
  <Footer/>
  {/* <ContainerFooter/> */}
</div>


  </div>
    
}

export default App;
