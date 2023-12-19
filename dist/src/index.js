var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
export function ReactTreeProvider(providersWithParams) {
    return function Wrapper(_a) {
        var children = _a.children;
        return providersWithParams.reduceRight(function (acc, _a) {
            var Provider = _a[0], params = _a[1];
            return React.createElement(Provider, __assign({}, params), acc);
        }, children);
    };
}
