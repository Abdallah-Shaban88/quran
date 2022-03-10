import React, { useState, createContext} from 'react'

export const SurahsContext = createContext()

export const SurahsProvider = (props) => {
    const [surahs, setSurahs] = useState(null)
const [currentSurah, setCurrentSurah] = useState(null)
const [currentAyahAudio, setCurrentAyahAudio] = useState(0)
  return (
    <SurahsContext.Provider value={{surahs, setSurahs,
      currentSurah, setCurrentSurah,
      currentAyahAudio, setCurrentAyahAudio}}>{props.children}
        </SurahsContext.Provider>
  )
}
