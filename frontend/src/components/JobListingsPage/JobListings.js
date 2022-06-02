import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import JobTable from './JobTable'

const JobListings = () => {
    return (
        <div className="container" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Панель пользователя</Breadcrumb.Item>
                <Breadcrumb.Item active>Список работ</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h2>Список работ</h2>
            <p>Если вы пользуетесь мобильным телефоном, вам может потребоваться прокрутка влево и вправо, чтобы просмотреть всю таблицу.</p>
            <div className="container">
                <JobTable/>
            </div>
            <footer className="container" style={{paddingTop:'200px'}}>
                <p>Team Habarci</p>
                <p className="text-muted">2022 by MGZ Team</p>
            </footer>
        </div>
    )   
}

export default JobListings