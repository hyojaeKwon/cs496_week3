import React from 'react'

import Plan from '../component/plan'
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
function MakePlan(){
  return(
    <div>
      <Header/>
      <Navigation/>
      <Plan/>
    </div>
  )
}
export default MakePlan;