import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import smileImg from "../image/youtube.png";

const StyledImg = styled.img.attrs({
  src: `${smileImg}`,
})`
  width: 168px; 
  height: 110px;
`;

function Myr3() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://43.200.238.225:8000/recipes'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return(
    <section id="fridge">
      <div class="fridge_ctn">
        <div class="fridge_empty"></div>
        <div class="fridge_img">
        {users.map(user => (
          <div class="fridge_material">    
            <StyledImg></StyledImg>
            <p>[{user.FOOD_NAME}]</p>
          </div>
        ))}
        </div>
        <div class="fridge_empty"></div>
      </div>
    </section>
  );
}

export default Myr3;