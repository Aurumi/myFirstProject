import React from "react";
import { connect } from "react-redux";
import { clickCloseAc, clickPlusAc } from "../../redux-store/spolerFooter-reducer";
import Footer from "./Footer";


let ContainerFooter =(props)=>{
    
    return <Footer {...props} clickPlusAc={props.clickPlusAc} clickCloseAc={props.clickCloseAc}/>
}

const mapStateToProps = (state)=>{
    
    return {

       SpolerData:state.spolerFooter.SpolerData
       
    }
}



export default connect(mapStateToProps,{clickPlusAc,clickCloseAc})(ContainerFooter)






