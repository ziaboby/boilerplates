const PORT = require('./src/constants/settings').PORT,
    app = require('./src/server'),
    Logger = require('./src/utils/logger');
// setup DB
require('./src/db')

app.listen(PORT, () => {
    Logger('Server', false, `listening on port::${PORT}`)
});
