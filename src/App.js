import Profile from './Components/Profile/Profile';
import SideContent from './Components/SideContent/SideContent';
import MainContent from './Components/MainContent/MainContent';
import data from "./data.json";
import settings from "./settings.json";
import { useTitle } from './CustomHooks/useTitle';
import './App.css';

const App = () => {
  //263
  const title = data.profile.first_name+" "+data.profile.last_name+" cv";
  const language = settings.language[data.language] !== undefined ? settings.language[data.language] : settings.language["eng"];
  useTitle(title);
  console.log(language)
  return (
    <div className='App container'>
      <div>
        <Profile profile={data.profile}/>
      </div>
      <div className='content'>
        <SideContent side_content={data.side_content} language={language}/>
        <MainContent main_content={data.main_content} language={language}/>
      </div>
    </div>
    
  );
}

export default App;
