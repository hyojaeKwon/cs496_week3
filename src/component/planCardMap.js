/*global kakao*/ 
import React from 'react';
import styled from 'styled-components';

const Maps = styled.div`
width: 100%;
height: 95%;
margin-top: 5px;
border-radius: 5px;
font-family: SCDream4;
`;

class PlanCardMap extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x : props.props.x,
      y : props.props.y
    }
  }
  componentDidMount() {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=0a596be56a25e80a9ab55c7790f7b346&libraries=LIBRARY";
      document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const param = this.state;
        console.log("deep");
        console.log(this.state.x,this.state.y)

        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(this.state.x,this.state.y),
          level: 3
        };

        const map = new window.kakao.maps.Map(container, options);
     
      });
    };
  }
  render(){
      return(
          
          <Maps id="map"/>
          
      )
  }
}

export default PlanCardMap;