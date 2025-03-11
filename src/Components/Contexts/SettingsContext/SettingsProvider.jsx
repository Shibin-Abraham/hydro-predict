import { useState } from 'react'
import SettingsContext from './SettingsContext'

// eslint-disable-next-line react/prop-types
const SettingsProvider = ({children}) => {
    const [expand, setExpand] = useState(true)


  return (
    <SettingsContext.Provider value={{expand,setExpand}}>
        {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider