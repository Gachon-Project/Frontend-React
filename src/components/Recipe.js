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
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          '"노드 서버 ip 주소"/recipes-all'
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
      <section id="fridge2">
        <div class="fridge_ctn2">
          <div class="fridge_empty2"></div>
          <div class="fridge_loading">
            <div>로딩중..</div>
          </div>
          <div class="fridge_empty2"></div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section id="fridge2">
        <div class="fridge_ctn2">
          <div class="fridge_empty2"></div>
          <div class="fridge_error">
            <div>에러가 발생했습니다</div>
          </div>
          <div class="fridge_empty2"></div>
        </div>
      </section>
    );
  }
  if (!users) return null;
  return(
    <section id="fridge2">
      <div class="fridge_ctn2">
        <div class="fridge_img2">
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