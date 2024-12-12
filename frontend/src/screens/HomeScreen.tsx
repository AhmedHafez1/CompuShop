import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/products.api.slice';

const HomeScreen = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
