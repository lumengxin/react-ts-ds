import React, {useState} from 'react';

interface AppStateValue {
  username: string,
  shoppingCart: {
    items: {
      id: number,
      name: string,
    }[]
  }
}
const defaultValue: AppStateValue = {
  username: "li",
  shoppingCart: {
    items: []
  }
}

export const AppContext = React.createContext(defaultValue)

export const AppSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultValue)
  return (
    <AppContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {props.children}
      </AppSetStateContext.Provider>
    </AppContext.Provider>
  )
}