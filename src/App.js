
import './App.css';
import Footer from './components/footer/ContainerFooter';
import Header from './components/header/Header';
import Main from './components/main/Main';



function App(props) {

  return <div className="Wrapper-App">


<div className="Container-app">

  <Header/>
      
      <div className="Change-content">
        
        <Main/>

      </div>
   
  <Footer/>
  {/* <ContainerFooter/> */}
</div>


  </div>
    
}

export default App;
