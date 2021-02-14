
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';


function App() {

  return <div className="Wrapper-App">


<div className="Container-app">

  <Header/>
      
      <div className="Change-content">
        
        <Main/>

      </div>

  <Footer/>
  
</div>


  </div>
    
}

export default App;
