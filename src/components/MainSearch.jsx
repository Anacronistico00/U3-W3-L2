import { useState } from 'react';
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';
import Job from './Job';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsAction } from './redux/action';

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const getJobs = useSelector((state) => state.jobs.list);
  const getJobsError = useSelector((state) => state.jobs.error);
  const getJobsLoading = useSelector((state) => state.jobs.loading);
  const getFavourites = useSelector((state) => state.favourites.list);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={8} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className='mt-3'>
          <Link to='/favourites'>Favourites {getFavourites.length}</Link>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {isSearching && getJobsLoading ? (
            <div className='text-center'>
              <div>
                <p>Caricamento in corso...</p>

                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
              </div>
            </div>
          ) : !getJobsError ? (
            getJobs.length === 0 && isSearching ? (
              <p className='text-center mt-5 fs-4 fw-bold'>
                Nessun risultato trovato
              </p>
            ) : (
              getJobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
            )
          ) : (
            <Alert variant='danger'>{getJobsError}</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
