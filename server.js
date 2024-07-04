const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const statuses = [
    { id: 1, status: 'OK', code: 200 },
    { id: 2, status: 'Created', code: 201 },
    { id: 3, status: 'Accepted', code: 202 },
    { id: 4, status: 'No Content', code: 204 },
    { id: 5, status: 'Bad Request', code: 400 },
    { id: 6, status: 'Unauthorized', code: 401 },
    { id: 7, status: 'Forbidden', code: 403 },
    { id: 8, status: 'Not Found', code: 404 },
    { id: 9, status: 'Internal Server Error', code: 500 }
];

app.get('/api/statuses', (req, res) => {
    res.json(statuses);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});