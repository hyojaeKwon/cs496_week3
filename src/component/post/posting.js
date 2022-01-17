import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import location from '../../img/location.png';
import MapModal from './mapmodal';

const Wrapper = styled.div`
    margin-left: 15%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: #686D76;
    font-weight: 600;
`

const AreaName = styled.div`
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    color: #686D76;
    margin-right: 1.5rem;
`

const FirstImg = styled.img`
    display: inline-block;
    width: 500px;
    height: 500px;
`

const Content = styled.input`
    display: inline-block;
    position: absolute;
    width: 500px;
    height: 300px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    padding: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;
    overflow: auto;
    textOverflow: ellipsis;
    
    :focus { outline: none; };
`

const PlaceInput = styled.button`
    position: absolute;
    top: 600px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: white;
    color: #686D76;

    :focus { outline: none; };
`
const CostInput = styled.input`
    position: absolute;
    top: 655px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;

    -webkit-appearance: none;
    :focus { outline: none; };
`

const DateInput = styled.input`
    position: absolute;
    top: 710px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;

    :focus { outline: none; };
`;

const PostButton = styled(Link)`
    width: 150px;
    display: block;
    margin-left: 405px;
    margin-top: 5rem;
    padding: 0.4rem;
    text-decoration: none;
    border: 2.5px solid #4F8A8B;
    opacity: 70%;
    font-size: 1.2rem;
    font-weight: 350;
    color: #4F8A8B;
    text-align: center;
    font-weight: 500;
`;

const Images = styled.img`
    display:inline-block;
    width: 100px;
    height: 100px;
`;

const ImageContainer = styled.div`
    display: block;
`

const Posting = ({ username, area, files}) => {
    const formatDate = (current_datetime)=>{
        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
        return formatted_date;
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');
    const [expense, setExpense] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const url = '/post/' + username + '/' + area;

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const addPlace = place => {
        setPlace(place);
    }

    const addLatitude = latitude => {
        setLatitude(latitude);
    }

    const addLongitude = longitude => {
        setLongitude(longitude);
    }

    const sharePost = () => {
        /*
        const urlToObject = async() => {
            const imgurl = files[0].substring(5, files[0].length);
            const response = await fetch(imgurl);
            const blob = await response.blob();
            const file = new File([blob], 'testimage.jpg', {type: blob.type});
            console.log(file);
            return file;
        }
        
        const imageFile = urlToObject();
        console.log(typeof files[0]);
        */

        const PostData = new FormData();
        PostData.append("image", files[0]);
        PostData.append("contents", content);
        PostData.append("travel_date", travelDate);
        PostData.append("city", area);
        PostData.append("expense", parseInt(expense));
        PostData.append("place", place);
        PostData.append("latitude", parseFloat(latitude));
        PostData.append("longitude", parseFloat(longitude));
        console.log('포스팅 중');

        axios.post('http://192.249.18.146:443/api/posts/create-post', PostData, {
            headers: {
                "Authorization": "Token " + localStorage.getItem('login-token'),
                "Content-Type": "multipart/form-data"
            }
        })
        .then(function (response) {
            console.log('포스팅 성공');
        })
        .catch(function (error) {
            console.log('에러 발생')
        })
    }

    return(
        <Wrapper>
            <AreaName>{area}</AreaName>
            <div style={{display: 'inline-block', fontSize: '1.3rem', color: '#9e9e9e'}}>새 게시물 올리기</div>
            <div style={{width: '1000px', borderBottom: '2px solid #e3e3e3', marginTop: '1rem'}}/>
            <FirstImg src={URL.createObjectURL(files[0])}></FirstImg>
            
            <Content textAlignVertical='top' placeholder='내용 입력하기' value={content} onChange={(e) => setContent(e.target.value)}/>
            <PlaceInput onClick={openModal}>
                <div style={{display: 'inline-block'}}>{place || '위치 추가하기'}</div>
                <img src={location} alt='location' width={30} style={{marginLeft: '15px'}}/>
            </PlaceInput>
            <CostInput type='number' min='0' placeholder='사용경비 추가하기' value={expense} onChange={(e) => setExpense(e.target.value)}></CostInput>
            <DateInput type='text' placeholder='여행날짜 추가하기' value={travelDate} onChange={(e) => setTravelDate(e.target.value)}></DateInput>
            <ImageContainer>
            { files.length > 1 ? files.map((file) => <Images src={URL.createObjectURL(file)}/>) : <div></div>}
            </ImageContainer>
            <MapModal open={modalOpen} close={closeModal} header="장소 추가하기" addPlace={addPlace} addLatitude={addLatitude} addLongitude={addLongitude}></MapModal>
            <PostButton to={url} onClick={sharePost}>포스트 공유하기</PostButton>
        </Wrapper>
    )
}

export default Posting;