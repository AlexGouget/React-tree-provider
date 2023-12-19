import React from 'react';
import { render } from '@testing-library/react';
import {ReactTreeProvider} from "./index";
import '@testing-library/jest-dom';


// Mock Providers
const MockProviderOne = ({ children, propOne }: { children: React.ReactNode; propOne: string }) => <div data-testid="providerOne">{children}</div>;
const MockProviderTwo = ({ children, propOne }: { children: React.ReactNode; propOne: string }) => <div data-testid="providerTwo">{children}</div>;
const MockProviderThree = ({ children, propOne }: { children: React.ReactNode; propOne: string }) => <div data-testid="providerThree">{children}</div>;

describe('ReactTreeProvider', () => {
    it('should nest providers correctly', () => {
        const Providers = ReactTreeProvider([
            [MockProviderOne, { propOne: 'valueOne' }],
            [MockProviderTwo, { propTwo: 'valueTwo' }],
            [MockProviderThree, { }],
        ]);

        const { getByTestId } = render(
               <Providers>
                    <div data-testid="child">Child</div>
                </Providers>
        );

        const providerOne = getByTestId('providerOne');
        const providerTwo = getByTestId('providerTwo');
        const providerThree = getByTestId('providerThree');
        const child = getByTestId('child');

        expect(providerOne).toContainElement(providerTwo);
        expect(providerTwo).toContainElement(child);
    });

    // Vous pouvez ajouter plus de tests ici pour tester différents scénarios
});
