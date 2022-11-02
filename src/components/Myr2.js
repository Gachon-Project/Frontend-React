import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myr2() {
  const [users1, setUsers1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    const fetchUsers1 = async () => {
      try {
        setError1(null);
        setUsers1(null);
        setLoading1(true);
        const response = await axios.get(
          '"노드 서버 ip 주소"/recipes'
        );
        setUsers1(response.data);
      } catch (e) {
        setError1(e);
      }
      setLoading1(false);
    };
    fetchUsers1();
  }, []);

  const [users2, setUsers2] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    const fetchUsers2 = async () => {
      try {
        setError2(null);
        setUsers2(null);
        setLoading2(true);
        const response = await axios.get(
          '"노드 서버 ip 주소"/recipes-Replace'
        );
        setUsers2(response.data);
      } catch (e) {
        setError2(e);
      }
      setLoading2(false);
    };
    fetchUsers2();
  }, []);


  if (loading1 || loading2) {
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
  if (error1 || error2) {
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
  if (!users1 || !users2) return null;
  return(
    <section id="fridge2">
      <div class="fridge_ctn2">
        <div class="fridge_empty2"></div>
        <div class="fridge_img2">
        {users1.map(user => (
          <Link to={`/myr2/${user.FOOD_ID}`}>
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
        <div class="fridge_empty2"><hr></hr><span>대체 식품</span></div>
        <div class="fridge_img2">
        {users2.map(user => (
          <Link to={`/myr2/${user.FOOD_ID}`}>
            <div key={user.FOOD_ID} class="fridge_material2">    
              <img 
                src={`food/${user.FOOD_ID}.jpg`}
                alt=""
              />
              <p>{user.FOOD_NAME}</p>
            </div>
          </Link>
        ))}
        <div class="fridge_empty2"></div>
        </div>
      </div>
    </section>
  );
}

export default Myr2;