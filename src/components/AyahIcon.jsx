import React from 'react'

const AyahIcon = ({ayah, currentSurah}) => {
    return(<span className='d-flex align-items-center justify-content-center flex-wrap flex-1'> <svg width="69" height="69" xmlns="http://www.w3.org/2000/svg">
    <g>
     <title>Layer 1</title>
     <rect fill="#fff" stroke="#000" x="13.60355" y="13.25" width="42" height="42" id="svg_1" transform="rotate(45, 34.6036, 34.25)"/>
     <rect fill="#fff" stroke="#000" x="13.5" y="13.5" width="42" height="42" id="svg_2"/>
     <ellipse fill="#fff" stroke="#000" cx="34.5" cy="34.5" id="svg_3" rx="23" ry="23"/>
     {/* <text fontWeight="bold" transform="matrix(1, 0, 0, 1, 0, 0)" xmlSpace="preserve" textAnchor="start" fontFamily="'Gemunu Libre'" fontSize="24" strokeWidth="0" id="svg_7" y="43" x="27.15" stroke="#000" fill="#000000">{ayah.number}</text> */}
    </g>
   </svg>
     <span className='position-absolute z-index-2'>{currentSurah.ayahs.indexOf(ayah)+1}</span> 
   </span>)
}

export default AyahIcon