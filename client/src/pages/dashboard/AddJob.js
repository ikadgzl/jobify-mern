import { Alert, FormRow, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../wrappers/DashboardFormPage';

const AddJob = () => {
  const { createJob, displayAlert, clearValues, state } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.position || !state.company || !state.jobLocation) {
      displayAlert('danger', 'Please provide all the values');

      return;
    }

    if (state.isEditing) {
      return;
    }

    createJob();
  };

  const handleInput = () => {};

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{state.isEditing ? 'edit job' : 'add job'}</h3>
        {state.showAlert && <Alert />}

        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={state.position}
            handleChange={handleInput}
          />

          <FormRow
            type='text'
            name='company'
            value={state.company}
            handleChange={handleInput}
          />

          <FormRow
            type='text'
            name='location'
            value={state.location}
            handleChange={handleInput}
          />

          <FormRow
            type='text'
            name='position'
            value={state.position}
            handleChange={handleInput}
          />

          <FormRowSelect
            name='jobType'
            labelText='job type'
            list={state.jobTypeOptions}
            value={state.jobType}
            handleChange={handleInput}
          />

          <FormRowSelect
            name='status'
            list={state.statusOptions}
            value={state.status}
            handleChange={handleInput}
          />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              disabled={state.isLoading}
            >
              Submit
            </button>

            <button
              className='btn btn-block clear-btn'
              type='button'
              onClick={clearValues}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
