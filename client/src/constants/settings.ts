export const ROUTES = {
    index: '/'
};

// NOTE - APIs require Docker container for the server side
export const ENDPOINT =
    'http://localhost' + (process.env.SERVER_PORT ? ':' + process.env.SERVER_PORT : '') + '/api';
