import React from 'react';
import { render } from '@testing-library/react';
import { ReactTreeProvider } from "./index";
import '@testing-library/jest-dom';
// Mock Providers
var MockProviderOne = function (_a) {
    var children = _a.children, propOne = _a.propOne;
    return <div data-testid="providerOne">{children}</div>;
};
var MockProviderTwo = function (_a) {
    var children = _a.children, propOne = _a.propOne;
    return <div data-testid="providerTwo">{children}</div>;
};
var MockProviderThree = function (_a) {
    var children = _a.children, propOne = _a.propOne;
    return <div data-testid="providerThree">{children}</div>;
};
describe('ReactTreeProvider', function () {
    it('should nest providers correctly', function () {
        var Providers = ReactTreeProvider([
            [MockProviderOne, { propOne: 'valueOne' }],
            [MockProviderTwo, { propTwo: 'valueTwo' }],
            [MockProviderThree, {}],
        ]);
        var getByTestId = render(<Providers>
                    <div data-testid="child">Child</div>
                </Providers>).getByTestId;
        var providerOne = getByTestId('providerOne');
        var providerTwo = getByTestId('providerTwo');
        var providerThree = getByTestId('providerThree');
        var child = getByTestId('child');
        expect(providerOne).toContainElement(providerTwo);
        expect(providerTwo).toContainElement(child);
    });
    // Vous pouvez ajouter plus de tests ici pour tester différents scénarios
});
