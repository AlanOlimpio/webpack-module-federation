import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { getDashboardList } from '../services/dashboard';
import Loading from '../Loading';

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  function dashboardList() {
    setLoading(true);
    getDashboardList()
      .then((resolve) => {
        setList(resolve);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleLIstDashboard() {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          list.map((item, index) => {
            return (
              <Col className="p-2 mt-2" key={index}>
                <Card
                  bg={item.variant.toLowerCase()}
                  text={item.variant === 'light' ? 'dark' : 'white'}
                >
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>
                    <Card.Title> {item.subtitle}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </>
    );
  }

  useEffect(() => {
    dashboardList();
  }, []);

  return (
    <Container>
      <Row>
        <h2 className="mt-4">Dashboard</h2>
      </Row>
      <Row xs={1} md={loading ? 12 : 3} className="mb-5">
        {handleLIstDashboard()}
      </Row>
    </Container>
  );
};

export default Dashboard;
