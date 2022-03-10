import React, {useContext} from 'react'
import { SurahsContext } from './SurahsContext'


const Ayah = ({ayah}) => {
    const {currentSurah, currentAyahAudio, setCurrentAyahAudio} = useContext(SurahsContext)
  return (
    <p style={{
      color: currentSurah.ayahs.indexOf(ayah) === currentAyahAudio ? '#090' : '#000', 
      display: 'inline-block',
      alignItems: 'center',
      lineHeight: '2.5',
      wordBreak : 'break-all',
      flexDirection: 'row-reverse'
      
    }}>
        <AyahIcon ayah = {ayah} currentSurah={currentSurah} style={{
          background: '-webkit-linear-gradient(#ec1818ddd, #333)',
          webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent'
          }}/>
          {ayah.text}
    </p>
  )
}

const AyahIcon = ({ayah, currentSurah}) => {
    return(<span className='d-inline-flex align-items-center justify-content-center flex-wrap flex-1'> <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg">
    <g>
     <title>Layer 1</title>
     <rect fill="#fff" stroke="#000" x="7.604" y="23.25" width="22" height="22" id="svg_1" transform="rotate(45, 34.6036, 34.25)"/>
     <rect fill="#fff" stroke="#000" x="12.75" y="11.5" width="22" height="22" id="svg_2"/>
     <ellipse fill="#fff" stroke="#000" cx="24" cy="22.5" id="svg_3" rx="12" ry="12"/>
     {/* <text fontWeight="bold" transform="matrix(1, 0, 0, 1, 0, 0)" xmlSpace="preserve" textAnchor="start" fontFamily="'Gemunu Libre'" fontSize="24" strokeWidth="0" id="svg_7" y="43" x="27.15" stroke="#000" fill="#000000">{ayah.number}</text> */}
    </g>
   </svg>
     <span className='position-absolute z-index-2'>{currentSurah.ayahs.indexOf(ayah)+1}</span> 
   </span>)
}

export default Ayah 