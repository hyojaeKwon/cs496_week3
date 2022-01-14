import './App.css';
import { Route } from 'react-router-dom';
import Main from './pages/main';
import Intro from './pages/intro';
import Plan from './pages/plan';
import MyMap from './pages/mymap';
import MyPage from './pages/mypage';
import Login from './pages/login';
import Signin from './pages/signin';
import UserPost from './pages/userpost';
import Posting from './pages/posting';
import SearchPost from './pages/searchmap';
import AreaPost from './pages/areapost';

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
        <Route path="/post/:username/:area" component={UserPost}/>
        <Route path="/posting/:username/:area" component={Posting}/>
        <Route path="/search" component={SearchPost}/>
        <Route path="/post/:area" component={AreaPost}/>
    </div>
    
  );
}

export default App;