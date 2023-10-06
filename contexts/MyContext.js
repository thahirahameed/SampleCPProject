import React, {createContext, useContext, useState, useEffect} from 'react';

const MyContext = createContext();

export function MyContextProvider({children, value}) {
  const [data, setData] = useState(null);

  const contextValue = {data, setData};

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
