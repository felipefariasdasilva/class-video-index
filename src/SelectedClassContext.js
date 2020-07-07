import { createContext, useContext } from "react"

export const useSelectedClassContext = () => useContext(SelectedClassContext)

const SelectedClassContext = createContext(
    
    
    {    
        actualClass: 0,
    }
    

)

export default SelectedClassContext