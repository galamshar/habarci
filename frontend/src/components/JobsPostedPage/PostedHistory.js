import React, { useState, useEffect } from "react"
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Button, Row, Col, Card } from 'react-bootstrap'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import axios from 'axios'
import { useAuth0 } from "../../react-auth0-spa"
import config from "../../auth_config.json"
import { Link } from "react-router-dom"
import ViewFeedbackDelivererLink from "../ViewFeedbackUserPage/ViewFeedbackDelivererLink"


const { apiOrigin = "http://localhost:5000/api/jobs/completed?by=requested" } = config;

const fragileCheck = {
  true: 'Да',
  false: 'Нет'
}

const parcelSizeCheck = {
  Small : 'До 5 кг',
  Medium : 'От 5 до 10 кг',
  Large : 'От 10 кг до 20 кг',
  ExtraLarge : 'Больше 20 кг'
}

let pickUpFilter;
let destinationFilter;
let fragileFilter;
let sizeFilter;

const columns = [{
    dataField: 'pickUpAddress',
    text: 'От',
    filter: textFilter({
      getFilter: (filter) => {
        pickUpFilter = filter;
      }
    })
  }, {
    dataField: 'destinationAddress',
    text: 'Куда',
    filter: textFilter({
      getFilter: (filter) => {
        destinationFilter = filter;
      }
    })
  }, {
    dataField: 'fragile',
    text: 'Хрупкая',
    formatter: cell => fragileCheck[cell],
    filter: selectFilter({
        options: fragileCheck,
        getFilter: (filter) => {
          fragileFilter = filter;
        }
    })
  }, {
    dataField: 'parcelSize',
    text: 'Размер посылки',
    formatter: cell => parcelSizeCheck[cell],
    filter: selectFilter({
        options: parcelSizeCheck,
        getFilter: (filter) => {
          sizeFilter = filter;
        }
    })
  }]

const expandRow = {
    renderer: row => (
      <div>
        <Row>
          <Col md="9">
            <Row>
              <Col style={{textAlign:'left'}}>
                <Card text="black" bg="light" border="light" >
                  <Card.Body>
                    <Card.Title>Детали работы:</Card.Title>
                      <Card.Text>{ `Адрес отправителя: ${row.pickUpAddress}` }</Card.Text>
                      <Card.Text>{ `Адрес доставки: ${row.destinationAddress}` }</Card.Text>
                      <Card.Text>{ `Комментарии: ${row.comments}` }</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md="3" style={{textAlign:'left'}}>
                <Card text="white" bg="info" border="info" style={{ width: '14rem' }} >
                  <Card.Body>
                    <Card.Title>Детали приемщика:</Card.Title>
                    <Card.Text>{ `Имя: ${row.delivererName}`}</Card.Text>
                    <Card.Text>{ `Контакты:  ${row.delivererContactNo}`}</Card.Text>
                  </Card.Body>
                </Card>     
              </Col>
            </Row>
          </Col>
          <Col style={{textAlign:'right'}}>
            {row.senderFeedback === null ? <LeaveFeedback jobid={row._id.$oid}/> : <p>Оставить отзыв</p>}
            <ViewFeedbackDelivererLink userid={row.delivererID}/>
          </Col>
        </Row>        
      </div>
    )
};

function LeaveFeedback(props) {
  return(
    <div>
      <Link to ={`/submitfeedbacksender/${props.jobid}`}>Оставить отзыв</Link>
    </div>
  )
}

const options = {
  sizePerPage: 5,
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true,
  withFirstAndLast: false,
  hideSizePerPage: true
};

const handleClick = () => {
  pickUpFilter('');
  destinationFilter('');
  fragileFilter();
  sizeFilter();
};

const PostedHistory = () => {
  const [jobs, setJobs] = useState([])
  const { getTokenSilently } = useAuth0();

  useEffect(() => {
    async function callApi() {
      const token = await getTokenSilently();
      await axios.get(`${apiOrigin}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setJobs(response.data)
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }
    callApi();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

        return (
          <div>
            <BootstrapTable
                keyField='_id.$oid'
                data={ jobs }
                columns={ columns }
                expandRow={ expandRow }
                bordered={ false }
                filter={ filterFactory() }
                pagination={ paginationFactory(options) }
                wrapperClasses="table-responsive" 
            />
            <Button variant="secondary" onClick={ handleClick } block>Очистить все фильтры</Button>
          </div>
          )
}

export default PostedHistory;