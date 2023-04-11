import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [ darkMode, setDarkMode ] = useState(false);

    function handleChangeTheme() {
        setDarkMode(current => !current);
    }

    return (
        <AppContext.Provider value={{
            handleChangeTheme
        }}>
            { children }
        </AppContext.Provider>
    )
}

export {
    AppContextProvider
}

export default AppContext