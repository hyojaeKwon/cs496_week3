import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import RouteMap from '../component/plan/routemap';
import styled from 'styled-components';


const Plan = ({location}) => {
	const files = location.state.files;
	console.log(files);
	return(
		<div>
			<Header/>
			<Navigation/>
			<div style={{"display":"flex","justify-content":"center"}}>
				<Container>
				<TitleBar>
					<div style={{"display":"flex","alignItems":"flex-end"}}>
						<Title>
							여행 계획 추천
						</Title>
						<SubTitle>
							여행 계획 세우기
						</SubTitle>
					</div>
					<div>
						<Button>
							추천 여행지
						</Button>
					</div>
				</TitleBar>
				<div style={{'display':'flex','width':'100%','justifyContent':'space-between'}}>
					<RouteMap
					props={files}/>
					<RecoContainer>

					</RecoContainer>
				</div>

				</Container>
			</div>
			<Footer/>
		</div>
	)
};
const RecoContainer = styled.div`
	height: 100%;
	width: 330px;
	display: flex;
	border: 1px solid #000;
	flex-direction: column;
`;

const Button = styled.button`
	border: 0.5px solid #4F8A8B;
  width: 122px;
  color: #fff;
  /* background-color: #4F8A8B; */
  height: 40px;
  background-color: #4F8A8B;
  border-radius: 3px;
  font-size: 13px;
  line-height: 15px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  align-items: center;
  justify-content: center;
  &:hover{
    color: #4F8A8B;
    background-color: #fff;
    border: 0.5px solid #4F8A8B;
  }
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 36px;
	margin-left: 10px;
	line-height: 42px;
`;

const SubTitle = styled.div`
	font-weight: 600;
	font-size: 28px;
	line-height: 33px;
	margin-left: 10px;
	color: #848484;
`;

const TitleBar = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	margin-top: 20px;
	padding-bottom: 20px;
	align-items: flex-end;
	margin-bottom: 40px;
	border-bottom: 0.5px solid #e3e3e3;
	justify-content: space-between;

`
const Container = styled.div`
	width: 1060px;
	height: auto;
`;

export default Plan;