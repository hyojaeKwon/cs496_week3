import React, {useEffect,useState} from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import RouteMap from '../component/plan/routemap';
import styled from 'styled-components';
import axios from 'axios';
import RecoCard from '../component/recoCard'
import { func } from 'prop-types';


const Plan = ({location,match}) => {
	// const area = match.params.area;
	const area = location.state.area;
	const [files, setFiles] = useState(location.state.files);
	// const [changeItems] = useState();
	const [posts, setPosts] = useState([]);
	
	// changeItems((item) => {
	// 	files = setFiles([...files,item])
	// });
	const changeItems = (item) => {
		setFiles([...files,item])	
		console.log(files)
	};


	useEffect(() => {
		axios.get('http://192.249.18.146:443/api/posts/get-city-posts/'+ area)
		.then(function (response) {
				console.log('포스팅 가져오기 성공');
				const data = response.data;
				setPosts([...posts, ...data]);
				console.log(posts);
		})
		.catch(function (error) {
				console.log('에러 발생')
		})
	}, []);
	
	console.log("확인")
	console.log(posts)
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
						<RecoCard posts={posts} changeItems={changeItems}>

						</RecoCard>
					</RecoContainer>
				</div>

				</Container>
			</div>
			<Footer/>
		</div>
	)
};
const RecoContainer = styled.div`
	height: 700px;
	width: 350px;
	overflow-y: scroll;
	display: flex;
	/* padding-right: 20px; */
	/* border: 1px solid #000; */
	/* background-color:  rgba(241, 241, 241, 0.79);; */
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