import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeCard from './ChangeText';
import Button from './Button';
import Profile from './Profile';

function App() {
  const [show, setShow] = useState(true);

  const userData = {
    name: 'Кирилл Панга',
    photo: 'https://steamuserimages-a.akamaihd.net/ugc/1852678988726807121/CB4E5A3B0D993756EA803806653EDF770E03FF4E/',
    description: 'Туда сюда.'
  };

  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <UserCard name="Кирилл" age="21" />
      {show ? <Counter /> : null}
      <button onClick={() => setShow(!show)}>
        Нажми, чтобы скрыть/показать
      </button>
      <Profile name={userData.name} photo={userData.photo} description={userData.description} />
      <ChangeCard />
      <Button buttontext="Click" />
      <Footer />
    </div>
  );
}

export default App;
