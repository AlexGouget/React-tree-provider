# React tree provider 🌲

`React Tree Provider` is a lightweight React utility for efficiently managing nested context providers. It simplifies the process of embedding multiple context providers in your component tree, thereby reducing boilerplate and improving code readability.

## Installation

Install the package using npm:

```bash
npm install react-tree-provider

# or

yarn add react-tree-provider
```


## Usage

Here's a basic example of how to use rtp in a React application:

```jsx
import React from 'react';
import {ReactTreeProvider} from "react-tree-provider";
import { UserProvider, ThemeProvider } from 'your-context-providers';

export default function MyApp({ Component, pageProps }) {
    const Providers = ReactTreeProvider([
        [UserProvider, { /* user-specific props */ }],
        [ThemeProvider, { /* theme-specific props */ }]
    ]);

    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
}
```

In this example, ReactTreeProvider is used to create a Providers component, which wraps UserProvider and ThemeProvider around the main app component. You can pass any context providers you need, along with their props.


