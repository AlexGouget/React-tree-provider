import React from "react";

/**
 * ReactTreeProvider is a higher-order function that creates a React component.
 * This component takes an array of React context providers and their associated parameters,
 * and returns a new component (Wrapper) that nests these providers around its children.
 *
 * @param {Array<Array<any>>} providersWithParams - An array of pairs [Provider, params].
 *    Each pair consists of a React context provider and its associated parameters.
 *    Example: [[UserProvider, { user }], [ThemeProvder, { theme }]]
 *
 * @returns {React.FC} A React functional component that takes `children` as props and
 *    wraps them with the specified providers.
 *
 * @example
 * function MyApp({ Component, pageProps }) {
 *   const Providers = ReactTreeProvider([
 *     [UserProvider, { user: currentUser }],
 *     [ThemeProvder, { theme: currentTheme }]
 *   ]);
 *
 *   return (
 *     <Providers>
 *       <Component {...pageProps} />
 *     </Providers>
 *   );
 * }
 */
export function ReactTreeProvider(providersWithParams:any[]) {
    return function Wrapper({ children }:{children:React.ReactNode}) {
        return providersWithParams.reduceRight((acc: any, [Provider, params]: any) => {
            return <Provider {...params}>{acc}</Provider>;
        }, children);
    };
}