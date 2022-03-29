import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [id, setId] = useState('');

  const onChange = (e) => {
    setId(e.target.value);
  };
  const clickId = () => {
    console.log(id);
  };

  const onClickLogin = () => {
    axios
      .post('/user_inform/onLogin', null, {
        params: {
          user_id: id,
        },
      })
      .then((res) => console.log(res))
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
      <input onChange={onChange} />
      <button onClick={onClickLogin}>클릭</button>
      <input />
    </div>
  );
};

export default Login;
