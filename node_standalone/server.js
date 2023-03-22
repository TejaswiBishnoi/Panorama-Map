const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors({origin:'*'}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});