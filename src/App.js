import Profile from './Components/Profile/Profile';
import SideContent from './Components/SideContent/SideContent';
import MainContent from './Components/MainContent/MainContent';
import './App.css';

const App = () => {
  const cv = {
    "profile":{
      "profile_photo":"ahmedKhemici",
      "first_name":"Ahmed",
      "last_name":"Khemici",
      "profession":"Software Engineer",
      "description":`I am an enthusiastic and driven Computer Science graduate with an Honours degree from the University
      of Université Saad Dahleb Blida. I am currently looking to secure a Data Engineering job to utilise my
      strong programing and problem solving skills.
      `
    },
    "side_content":{
    },
    "main_content":{
    }
  }
  return (
    <div className='App container'>
      <div className='profile'>
        <Profile profile={cv.profile}/>
      </div>
      <div className='content'>
        <SideContent/>
        <MainContent/>
      </div>
    </div>
    
  );
}

export default App;
