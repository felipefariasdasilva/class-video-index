import React, { useState } from 'react'
import merge from 'lodash.merge'
import SelectedClassContext from './SelectedClassContext'

const SelectedClassProvider = ( { children } ) => {

    const setSelectedClass = ( 
            {   
                actualClass
            }
        
        ) => {

            updateSelectedClass( prevState => {
            console.log(prevState);
            const newState = { ...prevState }
            return merge( newState, { 
                actualClass
            } )
        })
    }
    
    const selectedClassState = {
        actualClass: 0,
        setSelectedClass
    }

    const [selectedClass, updateSelectedClass] = useState(selectedClassState)

    return(
        <SelectedClassContext.Provider value={selectedClass}>
            { children }
        </SelectedClassContext.Provider>
    )   
}

export default SelectedClassProvider
