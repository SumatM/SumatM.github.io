import { Children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {

    let value = {
        theme:"light",
        bg:'linear-gradient(90deg, rgba(202,198,198,0) 0%, rgba(223,225,224,1) 0%, rgba(70,255,125,0.14066876750700286) 33%, rgba(0,254,255,0.3339460784313726) 79%)',
        color:'#FF9398',
        text:'',
        icons:'#FF9398'
    }

    const [theme,setTheme] = useState(value)

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )

}