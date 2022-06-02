import React from 'react'
import { Tabs, Tab, Breadcrumb } from 'react-bootstrap'
import AcceptedOngoing from './AcceptedOngoing'
import AcceptedHistory from './AcceptedHistory'

const JobsAccepted = () => {
    return (
        <div className="container" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Панель пользователя</Breadcrumb.Item>
                <Breadcrumb.Item active>Принятые работы</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h2>Ваши работы в процессе</h2>
            <p>Если вы пользуетесь мобильным телефоном, вам может потребоваться прокрутка влево и вправо, чтобы просмотреть всю таблицу.</p>
            <hr/>
            <Tabs defaultActiveKey="ongoingJobs" id="uncontrolled-tab-jobsaccepted">
                <Tab eventKey="ongoingJobs" title="Ongoing Jobs">
                    <div style={{paddingTop:'10px', paddingBottom:'10px' }}>
                    Вот ваши текущие задания. Когда вы заберете посылку, нажмите кнопку Принято.
                        Когда доставка будет завершена, нажмите кнопку Законченоы.           
                    </div>
                    <AcceptedOngoing/>
                </Tab>
                <Tab eventKey="jobHistory" title="Job History">
                    <div style={{paddingTop:'10px', paddingBottom:'10px' }}>
                    Принимаются все ваши прошлые работы. Вы можете оставить отзыв для вашего отправителя.
                    </div>
                    <AcceptedHistory/>
                </Tab>
            </Tabs>
            <footer className="container" style={{paddingTop:'200px'}}>
                <p>Team Habarci</p>
                <p className="text-muted">2022 by MGZ Team</p>
            </footer>
        </div>
    )
}

export default JobsAccepted