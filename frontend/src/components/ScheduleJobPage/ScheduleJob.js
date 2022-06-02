import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import FormSchedule from './FormSchedule'

const ScheduleJob = () => {
    return (
        <div>
            <div className="container" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Панель пользователя</Breadcrumb.Item>
                <Breadcrumb.Item active>Создание заказа</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h2>Создать заказ</h2>
            <p>Заполните информацию о своей работе в форме, представленной ниже. Любые особые запросы (например, доставка к определенному времени) должны быть включены в
             комментарии в разделе дополнительной информации. По умолчанию наши курьеры доставят вашу посылку в тот же день, если время не указано.
            </p>
            <hr />
            <div className="col-md-12">
              <FormSchedule />
              <hr/>
            </div>
            <footer className="container" style={{paddingTop:'10px'}}>
                <p>Team Habarci</p>
                <p className="text-muted">2022 by MGZ Team</p>
            </footer>
        </div></div>
    )
}

export default ScheduleJob