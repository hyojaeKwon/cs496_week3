import React from 'react'

import Plan from '../component/plan'
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer'
function MakePlan({match}){
  
  const area = match.params.area;

  return(
    <div>
      <Header/>
      <Navigation/>
      <Plan area={area}/>
      <Footer/>
    </div>
  )
}
export default MakePlan;