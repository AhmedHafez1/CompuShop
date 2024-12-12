import { useParams } from 'react-router-dom';
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useGetProductsByIdQuery } from '../slices/products.api.slice';
import Loader from '../components/Loader';

const ProductScreen = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductsByIdQuery(id!);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger" className="my-3">
          Something wrong happened while fetching the data!
        </Alert>
      ) : (
        <>
          <Link className="btn btn-light my-3" to="/">
            Back To Home
          </Link>
          <Row>
            <Col md={5}>
              <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product?.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  {product && (
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  )}
                </ListGroup.Item>
                <ListGroup.Item>{product?.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product && product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className="btn btn-block"
                      type="button"
                      disabled={!!product && product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
