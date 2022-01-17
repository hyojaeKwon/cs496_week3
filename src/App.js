import './App.css';
import { Route } from 'react-router-dom';
import Main from './pages/main';
import Intro from './pages/intro';
import Plan from './pages/plan';
import MyMap from './pages/mymap';
import MyPage from './pages/mypage';
import Signin from './pages/signin';
import Signup from './pages/signup';
import UserPost from './pages/userpost';
import Upload from './pages/upload';
import Post from './pages/post';
import SearchPost from './pages/searchmap';
import AreaPost from './pages/areapost';
import MakePlan from './pages/makeplan';

function App() {
  const isAuthorized = localStorage.getItem('login-token');
  return (
    <div>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/search/post/:area" component={AreaPost}/>
        <Route path="/search" exact={true} component={SearchPost}/>
        <Route path="/plan" component={Plan}/>
        <Route path="/mymap" component={MyMap}/>
        <Route path="/mypage" component={MyPage}/>
        <Route path="/post/:username/:area" component={UserPost}/>
        <Route path="/posting/:username/:area" exact={true} component={Upload}/>
        <Route path="/posting/:username/:area/detail" exact={true} component={Post}/>
        <Route path="/make/plan" component={MakePlan}/>
    </div>
    
  );
}

export default App;