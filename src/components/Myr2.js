import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myr2() {
  const [users1, setUsers1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    const fetchUsers1 = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError1(null);
        setUsers1(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading1(true);
        const response = await axios.get(
          'http://43.200.238.225:8000/recipes'
        );
        setUsers1(response.data); // 데이터는 response.data 안에 들어있습니다.
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
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError2(null);
        setUsers2(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading2(true);
        const response = await axios.get(
          'http://43.200.238.225:8000/recipesReplace'
        );
        setUsers2(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError2(e);
      }
      setLoading2(false);
    };
    fetchUsers2();
  }, []);


  if (loading1 || loading2) return <div>로딩중..</div>;
  if (error1 || error2) return <div>에러가 발생했습니다</div>;
  if (!users1 || !users2) return null;
  return(
    <section id="fridge2">
      <div class="fridge_ctn2">
        <div class="fridge_empty2"></div>
        <div class="fridge_img2">
        {users1.map(user => (
          <div key={user.FOOD_ID} class="fridge_material2">    
            <img 
              src={`food/${user.FOOD_ID}.jpg`}
              alt=""
            />
            <p>[{user.FOOD_NAME}]</p>
          </div>
        ))}
        </div>
        <div class="fridge_empty2"><hr></hr><span>대체 식품</span></div>
        <div class="fridge_img2">
        {users2.map(user => (
          <div key={user.FOOD_ID} class="fridge_material2">    
            <img 
              src={`food/${user.FOOD_ID}.jpg`}
              alt=""
            />
            <p>[{user.FOOD_NAME}]</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Myr2;