import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from '../wrappers/JobsContainer';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { state, getJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (state.isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      {state.jobs.length === 0 ? (
        <h2>No jobs to display...</h2>
      ) : (
        <h5>
          {state.totalJobs} job {state.jobs.length > 1 && 's'} found
        </h5>
      )}

      <div className='jobs'>
        {state.jobs.map((job) => (
          <Job key={job._id} {...jobs} />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
