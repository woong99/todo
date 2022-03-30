import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post('/user_inform/onLogin', null, {
        params: {
          user_id: id,
          user_pw: pw,
        },
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.userId === undefined) {
          // id가 일치하지 않는 경우
          console.log('====================', res.data.msg);
        } else if (res.data.userId === null) {
          // id는 있지만 비밀번호가 일치하지 않는 경우
          console.log('================', '입력하신 비밀번호가 일치하지 않습니다.');
          alert('입력하신 비밀번호가 일치하지 않습니다.');
        } else if (res.data.userId === id) {
          // id, pw 모두 일치하는 경우
          console.log('====================', '로그인 성공');
          sessionStorage.setItem('user_id', id);
        }
        console.log(sessionStorage.getItem('user_id'));
        document.location.href = '/';
      })
      .catch();
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  const click = () => {
    axios
      .get('/user_inform/login')
      .then((res) => console.log(res.data.data))
      .catch();
  };

  return (
    <div>
      Login
      <button onClick={click}>버튼</button>
      <input onChange={onIdChange} />
      <input onChange={onPwChange} />
      <button onClick={onClickLogin}>클릭</button>
    </div>
  );
};

export default Login;
