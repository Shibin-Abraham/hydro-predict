/* eslint-disable react/prop-types */
import { useState } from 'react'
import DamDataContext from './DamDataContext'

const DamDataProvider = ({children}) => {
    const [damData,setDamData] = useState([])
  return (
    <DamDataContext.Provider value={{damData,setDamData}}>
        {children}
    </DamDataContext.Provider>
  )
}

export default DamDataProvider