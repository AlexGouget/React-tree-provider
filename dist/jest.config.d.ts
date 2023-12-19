export let testEnvironment: string;
export let setupFilesAfterEnv: string[];
export let testPathIgnorePatterns: string[];
export let transform: {
    '^.+\\.[tj]sx?$': string;
};
