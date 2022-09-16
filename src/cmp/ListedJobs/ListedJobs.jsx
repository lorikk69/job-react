import React from 'react'
import { Col, Row } from 'react-bootstrap'

const JobList = ({ jobs })  => {
    return (
      <Row>
        {jobs.map((elem) => {
          return (
            <Col md={4} key={elem._id}>
              <SuperheroCard data={elem} favoriteList={favoriteList} toggleFavorite={toggleFavorite}  />
            </Col>
          )
        })}
      </Row>
    )
  }



export default JobList;