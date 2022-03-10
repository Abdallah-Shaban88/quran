import {useState, useEffect, useContext} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Ayah from './Ayah'
import {SurahsContext} from './SurahsContext'

const style = {
  display: 'flex',
  flexDirction: 'column',
  justifyContent: 'space-between'
}

function Surah() {
  const {currentSurah, currentAyahAudio, setCurrentAyahAudio} = useContext(SurahsContext)


  return (
    currentSurah === null?
    <></>
    :<div className='p-3'>
    <h1>{currentSurah.name}</h1>
    <div >
      {
        currentSurah.ayahs.map( ayah => <Ayah ayah={ayah}/>)
      }
    </div>
    <ReactAudioPlayer
       src={currentSurah.ayahs[currentAyahAudio].audio}
       autoPlay
       controls
       onEnded={() => {
       if(currentAyahAudio < currentSurah.ayahs.length-1 ) {
       setCurrentAyahAudio(currentAyahAudio => currentAyahAudio + 1)
       } else {
        setCurrentAyahAudio(0)
       }
       }}
       />
       {
         console.log(<ReactAudioPlayer
          src={currentSurah.ayahs[currentAyahAudio].audio}
          autoPlay
          controls
          onEnded={() => {
          if(currentAyahAudio < currentSurah.ayahs.length-1 ) {
          setCurrentAyahAudio(currentAyahAudio => currentAyahAudio + 1)
          } else {
           setCurrentAyahAudio(0)
          }
          }}
          />)
       }
    {/* {
    () => {
      currentSurah.ayahs[currentAyahAudio].text.style.colo = 
    }
    } */}
    
    </div >
  )
}

export default Surah