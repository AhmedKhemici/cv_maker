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
      "medias":[
        {
          "type":"email",
          "value":"ahmed.khemici@gmail.com",
          "url":""
        },
        {
          "type":"phone",
          "value":"+213665824855",
        },
        {
          "type":"whatsapp",
          "value":"+213665824855",
          "url":""
        },
        {
          "type":"location",
          "value":"Algeria",
          "url":"https://maps.app.goo.gl/UtR5SaZmm1oansTp8"
        },
        {
          "type":"linkedin",
          "value":"linkedin.com/in/ahmed-khemici-4523aa156",
          "url":"https://www.linkedin.com/in/ahmed-khemici-4523aa156"
        }
      ],
      "skills":[
        {
          "name":"Programming language :",
          "tools":"java , C++, Python, R , VBA Microsoft."
        },
        {
          "name":"Computer networking :",
          "tools":"LAN Network, WAN Network."
        },
        {
          "name":"DataBase :",
          "tools":"MySQL , phpMyAdmin , SQL Server ,Apache derby , Firebase."
        },
        {
          "name":"Microsoft Office :",
          "tools":"PowerPoint, Word, Excel."
        },
        {
          "name":"Web :",
          "tools":"Html, Php, Css."
        }      
      ],
      "languages":[
        {
          "name":"Arabic",
          "level":"Native or Bilingual Proficiency",
        },
        {
          "name":"English",
          "level":"Professional Working Proficiency",
        },
        {
          "name":"French",
          "level":"Full Professional Proficiency",
        }
      ]

    },
    "main_content":{
      "experiences":[
        {
          "job_title":"Backend Engineer",
          "company_name":"Yobi",
          "date":"08/2020 - 04/2023",
          "location":"Remote/California",
          "points":[
            "Implemented Calls using twilio",
            "create microservices .."
          ]
        },
      ],
      "certificates":[
        {
          "name":"Certified Web Development",
          "date":"04/2018 – 05/2018"
        }
      ],
      "personal_projects":[
        {
          "name":"Easy Document Classifire",
          "points":[
            "Document Classification Using Supervised Classification Knn (K Nearest Neighbor)"
          ]
        }
      ],
      "educations":[
        {}
      ]
    }
  }
  return (
    <div className='App container'>
      <div>
        <Profile profile={cv.profile}/>
      </div>
      <div className='content'>
        <SideContent side_content={cv.side_content}/>
        <MainContent main_content={cv.main_content}/>
      </div>
    </div>
    
  );
}

export default App;
