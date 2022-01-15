import React,{useState} from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import FirstComponent from '../component/main/FirstComponent';
import TrendingSite from "../component/main/TrendingSite";
import TrendingPost from '../component/main/TrendingPost';
import MainSwipe from '../component/main/MainSwipe';
import styled from 'styled-components';
import Footer from '../component/common/footer'; 
import Modal from '../component/Modals/Modal'

const SetComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


// function Main(){
//     const [modalOpen, setModalOpen] = useState(false);

//     const openModal = () => {
//         setModalOpen(true);
//     }

//     const closeModal = () => {
//         setModalOpen(false);
//     }
//     return(
//         <React.Fragment>
//             <button onClick={openModal}>
//                 모달 팝업
//             </button>
//             <Modal open={modalOpen} close={closeModal} header="Modal heading">
                
//             </Modal>
//         </React.Fragment>
//     );

// }



const Main = () => {
    return(
        <div>
            <div>
                <Header/>
                <Navigation/>
            </div>
            <SetComponent>
                <FirstComponent/>
                <TrendingSite/>
                <MainSwipe/>
                <TrendingPost/>
                <Footer/>
            </SetComponent>
        </div>
        // <Modal/>
    );
};

export default Main;