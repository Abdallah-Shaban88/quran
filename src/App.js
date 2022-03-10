import {useState, useEffect, useContext} from 'react'
import './App.css';
import alafasy from './data/ar.alafasy.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SurahsContext} from './components/SurahsContext'
import Navbar from './components/Navbar'
import Surah from './components/Surah'


function getData(){}

function App() {
//   const suruhs = useContext(SurahsContext)
// console.log(suruhs)
// const [surahs, setSurahs] = useState(null)
// const [currentSurah, setCurrentSurah] = useState(null)
// const [currentAyahAudio, setCurrentAyahAudio] = useState(0)

const {surahs, setSurahs} = useContext(SurahsContext)

useEffect(async () => {
  //  await axios.get('http://api.alquran.cloud/v1/quran/ar.alafasy')
  //  .then(res => setSurahs(res.data.data.surahs))
  setSurahs(alafasy.data.surahs)
  console.log(alafasy)
  } ,[])


  return (
    
    <div className="App" style={{display:'flex', flexDirection: 'row-reverse', height: '100vh'}}>
      {
        surahs === null ? <h1>Loading</h1>
    :<>
     <Navbar /> 
      <Surah />
  </>

      }
    </div>
  );
}

export default App;
