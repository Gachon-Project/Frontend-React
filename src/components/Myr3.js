import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Myr3() {
  const [users1, setUsers1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(null);

  const params = useParams();
  useEffect(() => {
    const fetchUsers1 = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError1(null);
        setUsers1(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading1(true);
        const id = params.foodId;
        console.log(id);
        const response = await axios.get(
          `http://43.200.238.225:8000/ingredients-exact/${id}`
        );
        console.log(response.data);
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
        const id = params.foodId;
        const response = await axios.get(
          `http://43.200.238.225:8000/recipes/${id}`
        );
        setUsers2(response.data); // 데이터는 response.data 안에 들어있습니다.
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
  if (!users1 ||!users2) return null;
  return(
    <section id="recipe">
      <div class="ca">
        <div class="c1">
          <div key={users1[0].FOOD_ID} class="food">  
            <img src={`../food/${users1[0].FOOD_ID}.jpg`} alt=""></img>
            <p>{users1[0].FOOD_NAME}</p>
          </div>
        </div>
        <div class="c2">
          <div class="wofy">
            <table class="tbwofy">
              <tr>
                <th scope="cols">재료명</th>
                <th scope="cols">재료용량</th>
              </tr>
              {users1.map(user => (
                <tr key={user.FOOD_ID}>
                  <td>{user.INGREDIENTS_NAME}</td>
                  <td>{user.INGREDIENTS_AMOUNT}</td>
                </tr>
              ))}
            </table>
          </div>
          <div class="tnstj">
            <ul>
            {users2.map(user => (
              <li key={user.FOOD_ID}>{user.ORDER}. {user.DETAIL}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Myr3;