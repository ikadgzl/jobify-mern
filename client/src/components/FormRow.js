const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label className='form-label'>
        {name}
        <input
          className='form-input'
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FormRow;
