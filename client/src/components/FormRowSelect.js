const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='form-row'>
      <label className='form-label'>
        {labelText || name}

        <select
          name={name}
          value={value}
          onChange={handleChange}
          className='form-select'
        >
          {list.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FormRowSelect;
