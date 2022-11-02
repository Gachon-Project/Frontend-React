import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ImgUpload2() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          '"노드 서버 ip 주소"/ingredients-flask'
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section id="Img_result">
        <div class="ctn">
          <div class="con1">
          </div>
          <div class="con2">
            <div class="Img_dvs">
            <div>로딩중..</div>
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
  if (error) {
    return (
      <section id="Img_result">
        <div class="ctn">
          <div class="con1">
          </div>
          <div class="con2">
            <div class="Img_dvs">
            <div>에러가 발생했습니다</div>
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
  if (!users) return null;

  return(
    <section id="Img_result">
      <div class="ctn">
        <div class="con1">
        </div>
        <div class="con2">
          <div class="Img_dvs">
          {users.map(user => (
            <div key={user.INGREDIENTS_ID} class="Img_col">    
              <img 
              src={`ingredients/${user.INGREDIENTS_ENG_NAME}.jpg`}
              alt=""
              />
              <p>{user.INGREDIENTS_NAME}</p>
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