import React from "react"
import { Link } from "react-router-dom"

function ViewFeedbackDelivererLink(props) {
    const format_string = props.userid.split('|')[1]
    return(
      <div style={{paddingTop: '85px', paddingBottom: '1px'}}>
        <Link to ={`/viewfeedback/${format_string}`}>Просмотреть отзывы от доставщиков</Link>
      </div>
    )
  }

  export default ViewFeedbackDelivererLink;