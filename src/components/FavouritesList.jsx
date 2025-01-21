import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavouriteJob from './FavouriteJob';

const FavouritesList = () => {
  const jobs = useSelector((state) => {
    return state.favourites.list;
  });

  return (
    <Container>
      <Row>
        <Col xs={8} className='mx-auto my-3'>
          <h1 className='display-1'>Jobs favourites list</h1>
        </Col>
        <Col xs={2} className='mt-3'>
          <Link to='/'>Go back</Link>
        </Col>
        <Col xs={10} className='mx-auto my-3'>
          {jobs.map((job, i) => {
            return <FavouriteJob key={i} job={job} index={i} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesList;
