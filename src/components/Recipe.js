import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Recipe() {
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


  if (loading) {
    return (
      <section id="fridge3">
        <div class="fridge_ctn3">
          <div class="fridge_empty3"></div>
          <div class="fridge_loading">
            <div>로딩중..</div>
          </div>
          <div class="fridge_empty3"></div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section id="fridge3">
        <div class="fridge_ctn3">
          <div class="fridge_empty3"></div>
          <div class="fridge_error">
            <div>에러가 발생했습니다</div>
          </div>
          <div class="fridge_empty3"></div>
        </div>
      </section>
    );
  }
  if (!users) return null;
  return(
    <section id="fridge3">
      <div class="fridge_ctn3">
        <div class="fridge_img3">
        {users.map(user => (
          <Link to={`/recipe/${user.FOOD_ID}`}>
            <div key={user.FOOD_ID} class="fridge_material2">    
              <img 
                src={`food/${user.FOOD_ID}.jpg`}
                alt=""
              />
              <p>{user.FOOD_NAME}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Recipe;