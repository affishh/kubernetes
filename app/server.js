const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MESSAGE  = process.env.APP_MESSAGE || 'HELLO FROM KUBERNETES!';

app.get('/', (req,res) => {
    res.send(MESSAGE);
} )

app.listen(port, () => {
    console.log(`app listening on port  ${port}`);
})