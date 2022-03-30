const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

router.post('/onLogin', (req, res) => {
  // console.log(`= = = > req : ${util.inspect(req)}`);

  const user_id = req.query.user_id;
  const user_pw = req.query.user_pw;

  // 입력된 id와 동일한 id가 있는지 확인
  const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?';
  db.query(sql1, user_id, (err, data) => {
    // err가 없다면
    if (!err) {
      // 결과값이 1보다 작다면(동일한 id가 없다면)
      if (data[0].result < 1) {
        res.send({ msg: '입력하신 id가 일치하지 않습니다.' });
      } else {
        const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userPw`;
        // sql 란에 필요한 parameter 값을 순서대로 기재
        const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw];
        db.query(sql2, params, (err, data) => {
          if (!err) {
            res.send(data[0]);
          } else {
            res.send(err);
          }
        });
      }
    }
  });
});

module.exports = router;
