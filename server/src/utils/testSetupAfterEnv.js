const Logger = require("./logger");

beforeAll(async () => {
    Logger('TEST', false, 'beforeAll', 'starting tests')
    // create a fresh testing env
})

afterEach(async () => {
    Logger('TEST', false, 'afterEach', 'clearing after test')
    // clear everything done in the last test case
})

afterAll(async () => {
    Logger('TEST', false, 'afterAll', 'ending tests')
    // clear and close everything
});