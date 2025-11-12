import { createContext,useState,useEffect } from "react";
export const ThemeContext  = createContext()


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
  if(theme) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};