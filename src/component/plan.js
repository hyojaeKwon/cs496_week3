import React, { Component, useState } from 'react';
import PlanModal from './planModal';

// import styled from 'styled-components';
// import PlanCard from '../component/plancard';


export default class MakePlans extends Component {

  state = {
    plans : [],
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true })
  }
  closeModal = () => {
    this.setState({ modalOpen: false })
    this.BtnClick();
  }
  BtnClick = () => {
    console.log("Clicked")
    import('./plancard').then(({PlanCard}) => {
      const {plans} = this.state;
      const props ={};
      props['month']= 7;
      props['day'] = 17;
      props['type'] = "식사";
      const position = plans.length +1;
      props['location'] = "맛있는 파스타 홍대점";
      props['where'] = "서울시 OO구";
      console.log(props)
      const newPlans = <PlanCard key={position} props={props}/>
        this.setState({plans:[...plans,newPlans]});
    })
  }

  render(){
    
    const {plans} = this.state;
    return(
      <div>
        <button onClick={this.openModal}>할 일 추가</button>
        <div style={{'display':'flex'}}>
          {plans}
        </div>
        <PlanModal open={ this.state.modalOpen } close={ this.closeModal } title="Create a chat room">
                    {/* // Modal.js <main> { this.props.children } </main>에 내용이 입력된다.
                    리액트 클래스형 모달 팝업창입니다.
                    쉽게 만들 수 있어요.
                    같이 만들어봐요! */}
        </PlanModal>
      </div>
    );
  }

}
// function Plan(){

// }