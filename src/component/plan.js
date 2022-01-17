import React, { Component, useState } from 'react';
import PlanModal from './planModal';

import styled from 'styled-components';
// import PlanCard from '../component/plancard';


export default class MakePlans extends Component {

  state = {
    plans : [],
    planInfo : [],
    date: new Date(),
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true })
    console.log("클릭")
  }
  closeModal = (items,date,type) => {
    console.log("type :" + type)
    this.setState({ modalOpen: false })
    if(items !== undefined){
      var obj = new Object();
      const dateTempArray = date.split(" ");

      obj['month'] = dateTempArray[1];
      obj['day'] = dateTempArray[2];
      obj['location'] = items['place_name'];
      obj['where'] = items['address_name'];
      obj['x'] = items['x']
      obj['y'] = items['y']
      obj['type'] = type;
      // console.log(type)
      this.BtnClick(obj);
    }
  }
  BtnClick = (props) => {
    console.log('버튼 클릭하는 부분')
    
    import('./plancard').then(({PlanCard}) => {
      const {plans,planInfo} = this.state;
      const position = plans.length +1;
      // this.planInfo[position] = props;
      // console.log(this.planInfo)
      // console.log(props)
      const newPlans = <PlanCard key={position} props={props}/>
      // this.setState({planInfo:[props]});
      // console.log(plans)
      this.setState({plans:[...plans,newPlans],planInfo:[...planInfo,props]});
    })
  }

  render(){
    
    const {plans,planInfo} = this.state;
    return(
      <Wrapper>
        <WrapperInner>
          <TitleContainer>
            <div>
              <Where>
                경기 고양시
              </Where>
              <SemiWhere>
                여행 계획 세우기
              </SemiWhere>
            </div>
            <div>
              <AddBtn onClick={this.openModal}>할 일 추가</AddBtn>
            </div>
          </TitleContainer>
          <PlanContainer>
            {plans}
          </PlanContainer>
          
          <div style={{'display':'flex'}}>
          </div>
          <PlanModal open={ this.state.modalOpen } close={ this.closeModal } title="Create a chat room"></PlanModal>
          
        </WrapperInner>
      </Wrapper>
    );
  }

}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const TitleContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 600;
`;

const Where = styled.span`
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 10px;
`
const SemiWhere = styled.span`
  font-size: 28px;
  line-height: 33px;
  color: #848484;
  /* padding-top: 10px; */
  margin-left: 10px;
`;
const AddBtn = styled.button`
  border: 0.5px solid #848484;
  width: 122px;
  height: 40px;
  background-color: rgba(217, 217, 217, 0);
  border-radius: 3px;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  &:hover{
    color: #4F8A8B;
    border: 0.5px solid #4F8A8B;
  }
`;

const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
// function Plan(){

// }