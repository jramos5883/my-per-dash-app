// import { createContext, useState } from "react";

// interface UserContextProps {
//   currentUser: any | null;
//   setCurrentUser: React.Dispatch<React.SetStateAction<any | null>>;
// }

// //as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

import { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  currentUser: any | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<any | null>>;
}

// Create the context with the correct types
export const UserContext = createContext<UserContextProps>({
  currentUser: null,
  setCurrentUser: () => {}, // Default value must match the type
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
