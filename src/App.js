import Profile from './Components/Profile/Profile';
import SideContent from './Components/SideContent/SideContent';
import MainContent from './Components/MainContent/MainContent';
import {data} from "./data.js";
import {settings} from "./settings.js";
import { useTitle } from './CustomHooks/useTitle';
import './App.css';

const App = () => {
  //263
  const title = data.profile.first_name+" "+data.profile.last_name+" cv";
  const language = settings.language[data.language] !== undefined ? settings.language[data.language] : settings.language["eng"];
  useTitle(title);
  const pages = data.pages.map(page =>{
    return <div className="content">
      <div className='content'>
        {page.side_content !== undefined && <SideContent side_content={page.side_content} language={language}/>}
        {page.main_content !== undefined && <MainContent main_content={page.main_content} language={language}/>}
      </div>
    </div>
  })
  return (
    <>
    <div className='App container'>
      <div>
        <Profile profile={data.profile}/>
      </div>
      {pages}
    </div>
    </>
  );
}

export default App;
