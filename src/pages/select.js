import React from 'react';
import Header from "../component/common/header"
import Navigation from "../component/common/navigation"
import Footer from "../component/common/footer";
import Plan from "../component/map/planmap"


const SearchCity = () => {
  return(
    <div>
      <Header/>
      <Navigation/>
      <Plan/>
      <Footer/>
    </div>
  )
}

export default SearchCity;