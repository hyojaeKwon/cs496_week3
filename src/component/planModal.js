import React, {useState} from 'react';
import styled from 'styled-components';
import './planModal.css';
import { useForm } from 'react-hook-form'
import PlanMap from './planMap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
const Input = styled.input`
    width: 100px;
    :focus { outline: none; };
`
const SDatePicker = styled(DatePicker)`
  /* margin-top: 1.5rem; */
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 12px;
`
// class PlanModal extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       date : useState(new Date()),
//       [startDate, setStartDate] : useState(new Date()),
//       [searchPlace, setSearchPlace] : useState(''),
//       { open, close, header, addPlace, addLatitude, addLongitude } : props;
//     }
//   }
// }
const PlanModal = (props) => {
  // handleChange(e){
  //   this.setState({type : e.target.type.value})
  // }

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, addPlace, addLatitude, addLongitude } = props;
  const [searchPlace, setSearchPlace] = useState('');
  const [startDate, setStartDate]=useState(new Date());
  const [Selected, setSelected] = useState("");
  // const { date } = useState('');
  const type = useState('');

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <Section>
          <Header>
            {header}
            <HeaderBtn className="close" onClick={close}>
              {' '}
              &times;{' '}
            </HeaderBtn>
          </Header>
          {/* <main>
            {props.children}
          </main> */}
          <Footer>
          <form onSubmit={(e) => {e.preventDefault();
                                    console.log(e.target.keyword.value);
                                    // this.type = e.target.type.value;
                                    setSearchPlace(e.target.keyword.value);}}>
                    <div style={{'display':'flex','flexDirection':'column','alignItems':'flex-end','justifyContent':'space-between'}}>

                      <div style={{'display':'flex','alignItems':'center'}}>
                        <div style={{ 'marginRight': '10px'}}>여행 날자 : </div> 
                        <DatePicker 
                          style={{'paddingLeft': '10px'}} 
                          selected={startDate} 
                          onChange={date => setStartDate(date)}/>
                      </div>

                      <div style={{"display":"flex"}}>
                        <div style={{ 'marginRight': '10px'}}>활동 내용 : </div> 
                          <select name="type" onChange={handleSelect}  value={Selected}>
                            <option key="1" value="dining">식사</option>
                            <option key="2" value="mead">유흥</option>
                            <option key="3" value="cafe">카페</option>
                            <option key="4" value="meditation">휴식</option>
                            <option key="5" value="accomodation">숙소</option>
                            <option key="6" value="guitar">기타</option>
                          </select>
                      </div>

                      <div style={{'display':'flex','alignItems':'center'}}>
                        <div style={{ 'marginRight': '10px'}}>키워드 : </div>
                        <Input type="text" name="keyword" size="15" /> 
                        <button type="submit" style={{marginLeft: '10px', backgroundColor: '#4F8A8B'}}>검색하기</button>
                      </div>
                    </div>
                    <PlanMap date={startDate} type={Selected} searchPlace={searchPlace} addPlace={addPlace} addLatitude={addLatitude} addLongitude={addLongitude} close={close}/>
            </form>
          </Footer>
        </Section>
      ) : null}
    </div>
  );
};

const Section = styled.div`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
`
// .modal > section > header {
//   position: relative;
//   padding: 16px 64px 16px 16px;
//   background-color: #f1f1f1;
//   font-weight: 700;
// }

const Header = styled.div`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`

const HeaderBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
`
// .modal > section > main {
//   padding: 16px;
//   border-bottom: 1px solid #dee2e6;
//   border-top: 1px solid #dee2e6;
//   display: flex;
// }
const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`

const FooterButton = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`

const InfoWrapper = styled.div`
  margin: 10px;
`;
export default PlanModal;