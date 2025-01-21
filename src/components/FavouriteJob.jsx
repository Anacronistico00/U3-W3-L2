import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const FavouriteJob = ({ job, index }) => {
  const dispatch = useDispatch();
  return (
    <Row
      key={index}
      className='mx-0 mt-3 p-3 align-items-center'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${job.company_name}`}>{job.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={job.url} target='_blank' rel='noreferrer'>
          {job.title}
        </a>
      </Col>
      <Col xs={3} className='text-center d-flex'>
        <Button
          className='m-2'
          variant='danger'
          onClick={() => {
            dispatch({
              type: 'REMOVE_FROM_FAVOURITES',
              payload: index,
            });
          }}
        >
          Remove from favorites
        </Button>
      </Col>
    </Row>
  );
};

export default FavouriteJob;
