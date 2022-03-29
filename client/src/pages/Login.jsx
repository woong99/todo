import React from 'react';
import axios from 'axios';

const Login = () => {
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
      <button onClick={click}>버튼</button>
      <button onClick={click}>버튼</button>
    </div>
  );
};

export default Login;
