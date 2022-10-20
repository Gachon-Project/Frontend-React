import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myr() {
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
        console.log(response.data.INGREDIENTS_ENG_NAME);
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section id="fridge">
        <div class="fridge_ctn">
          <div class="fridge_empty"></div>
          <div class="fridge_img">
            <div>로딩중..</div>
          </div>
          <div class="cont2">
            <a href="/myr2">레시피 확인</a>
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section id="fridge">
        <div class="fridge_ctn">
          <div class="fridge_empty"></div>
          <div class="fridge_img">
            <div>에러가 발생했습니다</div>
          </div>
          <div class="cont2">
            <a href="/myr2">레시피 확인</a>
          </div>
        </div>
      </section>
    );
  }
  if (!users) return null;
  return (
    <section id="fridge">
      <div class="fridge_ctn">
        <div class="fridge_empty"></div>
        <div class="fridge_img">
        {users.map(user => (
          <div key={user.INGREDIENTS_ID} class="fridge_material">   
            <img 
              src={`ingredients/${user.INGREDIENTS_ENG_NAME}.jpg`}
              alt=""
            />
            <p>[{user.INGREDIENTS_NAME}]</p>
          </div>
        ))}
        </div>
        <div class="cont2">
          <a href="/myr2">레시피 확인</a>
        </div>
      </div>
    </section>
  );
}

export default Myr;