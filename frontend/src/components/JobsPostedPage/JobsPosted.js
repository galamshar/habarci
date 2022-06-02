import React from 'react'
import { Tabs, Tab, Breadcrumb } from 'react-bootstrap'
import PostedPending from './PostedPending'
import PostedOngoing from './PostedOngoing'
import PostedHistory from './PostedHistory'

const JobsPosted = () => {
    return (
        <div className="container" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Панель пользователя</Breadcrumb.Item>
                <Breadcrumb.Item active>Опубликованные работы</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h2>Ваши посылки</h2>
            <p>Принимаются все ваши прошлые работы. Вы можете оставить отзыв для вашего отправителя.</p>
            <hr/>
            <Tabs defaultActiveKey="pendingJobs" id="uncontrolled-tab-jobsposted">
                <Tab eventKey="pendingJobs" title="Pending Jobs">
                    <div style={{paddingTop:'10px', paddingBottom:'10px' }}>
                    Здесь находятся ваши задания, которые ожидают принятия. Подождите, пока доставщик примет ваше задание.
                    </div>
                    <PostedPending/>
                </Tab>
                <Tab eventKey="ongoingJobs" title="Ongoing Jobs">
                    <div style={{paddingTop:'10px', paddingBottom:'10px' }}>
                    Вот ваши текущие задания. Доставщик доставит для вас вашу посылку.
                    </div>
                    <PostedOngoing/>
                </Tab>
                <Tab eventKey="jobHistory" title="Job History">
                    <div style={{paddingTop:'10px', paddingBottom:'10px' }}>
                    Ваша история работы. Вы можете оставить отзыв для вашего доставщика.
                    </div>
                    <PostedHistory/>
                </Tab>
            </Tabs>
            <footer className="container" style={{paddingTop:'200px'}}>
                <p>Team Habarci</p>
                <p className="text-muted">2022 by MGZ Team</p>
            </footer>
        </div>
    )
}

export default JobsPosted