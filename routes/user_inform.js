const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

router.post('/onLogin', (req, res) => {
  // console.log(`= = = > req : ${util.inspect(req)}`);

  const user_id = req.query.user_id;

  // 입력된 id와 동일한 id가 있는지 확인
  const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?';
  db.query(sql1, user_id, (err, data) => {
    console.log('---------------------------');
    // console.log(db);
    console.log(data[0].result);
  });
});
// router.get('/login', (req, res) => {
//   // 임시로 값을 넣어 주었다.
//   res.send({ data: '1231232' });
// });

module.exports = router;
