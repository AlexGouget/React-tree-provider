import React from "react";
function ReactTreeProvider(providersWithParams) {
    return function Wrapper(_a) {
        var children = _a.children;
        return providersWithParams.reduceRight(function (acc, _a) {
            var Provider = _a[0], params = _a[1];
            return <Provider {...params}>{acc}</Provider>;
        }, children);
    };
}
