import Profile from './Components/Profile/Profile';
import SideContent from './Components/SideContent/SideContent';
import MainContent from './Components/MainContent/MainContent';
import './App.css';

const App = () => {
  const cv = {
    "profile":{
      "profile_photo":"",
      "first_name":"",
      "last_name":"",
      "profession":"",
      "description":""
    },
    "side_content":{
    },
    "main_content":{
    }
  }
  return (
    <div className='App container'>
      <div className='profile'>
        <Profile/>
      </div>
      <div className='content'>
        <SideContent/>
        <MainContent/>
      </div>
    </div>
    
  );
}

export default App;
