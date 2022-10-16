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

function ImgUpload2() {
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
          'http://43.200.238.225:8000/ingredients'
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
    <section id="Img_result">
      <div class="ctn">
        <div class="con1">
        </div>
        <div class="con2">
          <div class="Img_dvs">
          {users.map(user => (
            <div class="Img_col">    
              <StyledImg></StyledImg>
              <p>[{user.INGREDIENTS_NAME}]</p>
            </div>
          ))}
          </div>
        </div>
        <div class="con3">
          <a href="/" class="buttonContainer" onClick={function(e){
            alert("냉장고 저장 완료!");
          }}>냉장고 넣기</a>
        </div>
      </div>
    </section>
  );
}

export default ImgUpload2;