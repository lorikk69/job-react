import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import AdminNav from '../cmp/NavBar/AdminNav';
import JobLister from '../cmp/NavBar/JobLister';
import NavBar from '../cmp/NavBar/NavBar';
import Footer from '../cmp/Footer/Footer';

import { useSelector } from 'react-redux'
import { MENU_TYPES } from '../lib/constants';
import styles from '../cmp/NavBar/Nav.module.scss'

const withMenu = (PageComponent, menuType) => {
    return (props) => {
      const authData = useSelector((state) => state.auth.data)
      let type = <NavBar/>
      if (authData) {
        type = authData.role === 'ADMIN' ? <AdminNav /> : <JobLister />
      }
      return (
        <>
          <div className={styles.menuWrapper}>
            <Container>
              <Row>
                <Col>{menuType === MENU_TYPES.dynamic ? type : menuType === MENU_TYPES.exposed ? <NavBar /> : menuType === MENU_TYPES.admin ? <AdminNav /> : <JobLister />}</Col>
              </Row>
            </Container>
          </div>
  
          <PageComponent {...props} />
          <Footer />
        </>
      )
    }
  }
  
  export default withMenu