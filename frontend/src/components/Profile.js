import React, { Fragment } from "react"
import { useAuth0 } from "../react-auth0-spa"
import "../App.css";
import { Image, Button, Breadcrumb } from "react-bootstrap"

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Загрузка...</div>;
  }

  console.log(user)

  return (
    <Fragment>
      <div className="container" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Панель пользователя</Breadcrumb.Item>
          <Breadcrumb.Item active>Профиль</Breadcrumb.Item>
        </Breadcrumb>
        <br></br>
        <h2>Информация о вас</h2>
        <br></br>
        <Image src={user.picture} alt="Profile" width="100" height="100" roundedCircle style={{ marginBottom: '8px' }} />
        <p>{user.name}</p>

        <div style={{borderStyle: 'groove', paddingTop: '20px', paddingBottom: '20px', width: '50%', margin: 'auto', borderRadius: '7px' }}>
          <p>Почта: {user.email}</p>
          <p>Статус: {user.email_verified ? "Подтвержден" : "Ожидает подтверждения"}</p>
          <div className='profile-actions' style={{ paddingTop: '1px', paddingBottom: '10px' }}>
            {/* <Button variant="primary">Edit Profile</Button>{' '} */}
            {/* <Button variant="secondary" href='/viewfeedback'>View Feedbacks</Button> */}
            <Button variant="secondary" href='/myfeedback'>Ваши отзывы</Button>
            <Button variant="secondary" href='/jobsposted'>Ваши заказы</Button>
            <Button variant="secondary" href='/jobsaccepted'>Ваши перевозки</Button>
          </div>
        </div>

        <footer className="container" style={{ paddingTop: '350px' }}>
          <p>Team Habarci</p>
          <p className="text-muted">2022 by MGZ Team</p>
        </footer>
      </div>
    </Fragment>

  );
};

export default Profile