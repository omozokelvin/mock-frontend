// import React, { createContext, useContext, ReactNode } from 'react';

// // Define the type for the router context
// interface RouterContextType {
//   getQueryParam: (param: string) => string;
//   setUrlParams?: (key: string, value: string) => void;
//   setQueryParam?: (key: string, value: string) => void;
// }

// // Create the context with the defined type
// const RouterContext = createContext<RouterContextType>({
//   getQueryParam: () => '',
// });

// export const useAppRouter = () => useContext(RouterContext);

// interface MockRouterProviderProps {
//   children: ReactNode;
//   router: RouterContextType;
// }

// export const MockRouterProvider: React.FC<MockRouterProviderProps> = ({
//   children,
//   router,
// }) => (
//   <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
// );
