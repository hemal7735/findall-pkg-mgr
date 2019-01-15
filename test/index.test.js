jest.mock('child_process');
const childProcess = require('child_process');
const findPackageManager = require('../index');

// Mock out `child_process` module's `spawnSync` method
const spawnSyncMock = jest.spyOn(childProcess, 'spawnSync');
spawnSyncMock.mockImplementation((packageManagerCommand, commandArguments) => {
    switch (packageManagerCommand) {
        case 'npm':
            return {
                error: undefined // no error thrown
            };
        case 'yarn':
        default:
            return {
                error: `Error is being thrown that ${packageManagerCommand} does not exist`
            };
    }
});

describe('isAvailable API', () => {
    it ('should return true if package manager is available', () => {
        expect(findPackageManager.isAvailable('npm')).toBe(true);
        expect(spawnSyncMock).toBeCalledTimes(1);
        expect(spawnSyncMock).toBeCalledWith('npm', ['-v']);
    });

    it ('should return false if package manager is NOT available', () => {
        expect(findPackageManager.isAvailable('yarn')).toBe(false);
        expect(spawnSyncMock).toBeCalledTimes(1);
        expect(spawnSyncMock).toBeCalledWith('yarn', ['-v']);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('findAll API', () =>  {
    it ('should return all available package managers', () => {
        expect(findPackageManager.findAll()).toEqual(['npm']);
        expect(spawnSyncMock).toBeCalledTimes(2);
        expect(spawnSyncMock).toBeCalledWith('npm', ['-v']);
        expect(spawnSyncMock).toBeCalledWith('yarn', ['-v']);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
