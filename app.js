const express = require('express');
const port = process.env.PORT || 3001;
const user_infrom = require('./routes/user_inform');

// express 객체 생성
const app = express();

app.use('/user_inform', user_infrom);
// app.get('/', function (req, res) {
//   res.send('hello cranberry!');
// });

app.listen(port, () => console.log('server works on port :' + port));
