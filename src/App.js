import './App.css';
import { Route } from 'react-router-dom';
import Main from './pages/main';
import Intro from './pages/intro';
import Plan from './pages/plan';
import MyMap from './pages/mymap';
import MyPage from './pages/mypage';
import Login from './pages/login';
import Signin from './pages/signin';

function App() {
  return (
    <div>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/plan" component={Plan}/>
        <Route path="/mymap" component={MyMap}/>
        <Route path="/mypage" component={MyPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={Signin}/>

    </div>
    
  );
}

export default App;