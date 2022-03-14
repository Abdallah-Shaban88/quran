import React, {useContext} from 'react'
import { SurahsContext } from './SurahsContext'


const Ayah = ({ayah}) => {
    const {currentSurah, currentAyahAudio, setCurrentAyahAudio} = useContext(SurahsContext)
    
  return (
    <p className= {currentSurah.ayahs.indexOf(ayah) === currentAyahAudio ? 'ayah active' : 'ayah'} style={{
      display: 'inline'
    }}>
      {ayah.text}
        <AyahIcon ayah = {ayah} currentSurah={currentSurah} currentAyahAudio={currentAyahAudio}/>
    </p>
  )
}

const AyahIcon = ({ayah, currentSurah, currentAyahAudio}) => {
    return(<span className='d-inline-flex align-items-center justify-content-center px-2'> 
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <g id="svg_4">
   <rect transform="rotate(45 26.8698 26.8698)" id="svg_1" height="22" width="22" y="15.86978" x="-0.12983" stroke="#000" fill="#fff"/>
   <rect id="svg_2" height="22" width="22" y="4.11978" x="5.01617" stroke="#000" fill="#fff"/>
   <ellipse ry="12" rx="12" id="svg_3" cy="15.11978" cx="16.26617" stroke="#000" fill="#fff"/>
  </g>
 </g>

</svg>
     <span style={{position: 'absolute', fontSize: '65%', color: '#000'}}>{currentSurah.ayahs.indexOf(ayah)+1}
     </span> 
   </span>)
}

export default Ayah 