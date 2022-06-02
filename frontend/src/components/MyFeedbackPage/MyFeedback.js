import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'
import config from '../../auth_config.json'
import { Card, CardColumns, Breadcrumb } from 'react-bootstrap'



function FeedbackBySender() {
    const [jobs, setJobs] = useState([])
    const { getTokenSilently } = useAuth0();
    const { apiOrigin = "http://localhost:5000/api/jobs/completed?by=delivered" } = config;
    const [senderAvgRating, setSenderAvgRating] = useState()
    const avgRatingApiOrigin = 'http://localhost:5000/api/my-avg-rating?by=delivered' 

    useEffect(() => {
        async function callApi() {
            const token = await getTokenSilently();
            const requestOne = await axios.get(`${apiOrigin}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const requestTwo = await axios.get(avgRatingApiOrigin, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            axios.all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                setSenderAvgRating(responses[1].data.avgRating)
                setJobs(responses[0].data)

                console.log(responses[0])
                // console.log(responses[1])
            })).catch(err => {
                console.log(err)
            })
        }
        callApi();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div>
            <p>Средняя оценка:  {senderAvgRating === null ? '-' : Math.round(senderAvgRating * 10)/10 }/5</p>
            <CardColumns>
                {jobs.filter(filterNoFeedbackSender).map(job => (
                    <Card style={{ width: '18rem' }} key={job._id.$oid}>
                        <Card.Body>
                            <Card.Header as="h6">От: {job.senderFirstName} {job.senderLastName} </Card.Header>
                            <Card.Title>Рейтинг: {job.senderRating}/5</Card.Title>
                            <Card.Text>
                                Отзыв: 
                                <br></br>
                                {job.senderFeedback}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </div>
    )
}

function filterNoFeedbackSender(job) {
    return job.senderFeedback !== null
}

function filterNoFeedbackDeliver(job) {
    return job.delivererFeedback !== null
}

function FeedbackByDeliverer() {
    const [jobs, setJobs] = useState([])
    const { getTokenSilently } = useAuth0();
    const { apiOrigin = "http://localhost:5000/api/jobs/completed?by=requested" } = config;
    const [delivererAvgRating, setDelivererAvgRating] = useState()
    const avgRatingApiOrigin = 'http://localhost:5000/api/my-avg-rating?by=requested' 

    useEffect(() => {
        async function callApi() {
            const token = await getTokenSilently();
            const requestOne = axios.get(`${apiOrigin}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const requestTwo = axios.get(avgRatingApiOrigin, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            axios.all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                setDelivererAvgRating(responses[1].data.avgRating)
                setJobs(responses[0].data)
                // console.log(responses[0])
                console.log(responses[1])
            })).catch(err => {
                console.log(err)
            })
        }
        callApi();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div>
            <p>Средняя оценка:  {delivererAvgRating === null ? '-' : Math.round(delivererAvgRating *10)/10}/5</p>
            <CardColumns>
                {jobs.filter(filterNoFeedbackDeliver).map(job => (
                    <Card style={{ width: '18rem' }} key={job._id.$oid}>
                        <Card.Body>
                            <Card.Header as="h6">От: {job.delivererName} </Card.Header>
                            <Card.Title>Рейтинг: {job.delivererRating}/5</Card.Title>
                            <Card.Text>
                                Отзыв: 
                                <br></br>
                                {job.delivererFeedback}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </div>
    )
}

function MyFeedback() {
    return (
        <div className="container" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Панель</Breadcrumb.Item>
                <Breadcrumb.Item href="/profile">Профиль</Breadcrumb.Item>
                <Breadcrumb.Item active>Ваши отзывы</Breadcrumb.Item>
            </Breadcrumb>
            <h2>Отзывы от работ</h2>
            <hr></hr>
            <div>
                <strong>Отзывы от отправителей</strong>
                <FeedbackBySender/>
            </div>

            <div>
                <strong>Отзывы от доставщиков</strong>
                <FeedbackByDeliverer/>
            </div>
            <footer className="container" style={{paddingTop:'200px'}}>
                <p>Team Habarci</p>
                <p className="text-muted">2022 by MGZ Team</p>
            </footer>
        </div>
        
    )
}
  
export default MyFeedback;