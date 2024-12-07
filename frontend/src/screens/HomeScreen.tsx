import { Col, Row } from 'react-bootstrap';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {product.name}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
