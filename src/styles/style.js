import { createGlobalStyle } from 'styled-components';
import RaleWay from './RaleWay.ttf';
import Gmarket from './Gmarket.ttf';
import SCDream5 from './SCDream5.ttf';
import SCDream4 from './SCDream4.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        src: local('Raleway'), url(${RaleWay}) format('truetype');
    }   
    @font-face {
        font-family: 'Gmarket';
        src: local('Gmarket'), url(${Gmarket}) format('truetype');
    } 
    @font-face {
        font-family: 'SCDream5';
        src: local('SCDream5'), url(${SCDream5}) format('truetype');
    }  
    @font-face {
        font-family: 'SCDream4';
        src: local('SCDream4'), url(${SCDream4}) format('truetype');
    }  
`;