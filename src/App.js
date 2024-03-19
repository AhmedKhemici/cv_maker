import Profile from './Components/Profile/Profile';
import SideContent from './Components/SideContent/SideContent';
import MainContent from './Components/MainContent/MainContent';
import data from "./data.json";
import { useTitle } from './CustomHooks/useTitle';
import './App.css';

const App = () => {
  const title = data.profile.first_name+" "+data.profile.last_name+" cv";
  useTitle(title);
  return (
    <div className='App container'>
      <div>
        <Profile profile={data.profile}/>
      </div>
      <div className='content'>
        <SideContent side_content={data.side_content}/>
        <MainContent main_content={data.main_content}/>
      </div>
    </div>
    
  );
}

export default App;
