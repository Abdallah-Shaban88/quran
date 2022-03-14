import {useState, useEffect,useRef, useContext} from 'react'
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
  const ayahsContainer = useRef()

  return (
    currentSurah === null?
    <></>
    :<div className='p-3'>
    <h1>{currentSurah.name}</h1>
    <div ref={ayahsContainer}>
      {
        currentSurah.ayahs.map( ayah =>  <Ayah ayah={ayah} currentSurah={currentSurah}/>
        )
        //   ayahsContainer.current !== undefined && currentSurah.ayahs.indexOf(ayah) === currentAyahAudio? console.log('ok'):
        // ayahsContainer.current.innerHTML += ayah.text
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