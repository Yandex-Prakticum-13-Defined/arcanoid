import React, { useContext } from 'react';
import './Start.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
  postLogout
} from '../../api/api';
import { AppContext, ERoutes } from '../../App';

const Start = () => {
  const navigate = useNavigate();

  // const [userId, setUserId] = useState(null);
  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUserId(res?.data?.id);
  //     localStorage.id = res?.data?.id;
  //   });
  // }, []);

  const { userId, setUserId } = useContext(AppContext);

  const handleLogout = () => {
    postLogout()
      .then(() => {
        setUserId(null);
        navigate(ERoutes.START);
      })
      .catch();
  };

  return (
    <div className='start'>
      <h1 className='start__title'>Арканоид</h1>
      <h2 className='start__subTitle'>В нижней части экрана находится ракетка,
        которая перемещается горизонтально с помощью мыши или стрелок клавиатуры.
        В верхней части экрана расположены блоки,
        которые разрушаются при попадании в них мячика.</h2>
      <h2 className='start__subTitle'>Если не удалось отбить мячик ракеткой, то игра
        заканчивается</h2>
      <div className='start__container'>
        {userId ? (
          <>
            <Link className='start__link' onClick={handleLogout} to='#'>Выйти</Link>
            <Link className='start__link' to={ERoutes.GAME}>Начать игру</Link>
            <Link className='start__link' to={ERoutes.PROFILE}>Профиль</Link>
          </>
        ) : (
          <>
            <Link className='start__link' to={ERoutes.LOGIN}>Войти</Link>
            <Link className='start__link' to={ERoutes.REGISTER}>Зарегистрироваться</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Start;
