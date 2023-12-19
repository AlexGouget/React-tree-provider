import React from "react";

function ReactTreeProvider(providersWithParams:any[]) {
    return function Wrapper({ children }:{children:React.ReactNode}) {
        return providersWithParams.reduceRight((acc: any, [Provider, params]: any) => {
            return <Provider {...params}>{acc}</Provider>;
        }, children);
    };
}