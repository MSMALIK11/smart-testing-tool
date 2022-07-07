import React from 'react';

const SelectBox = ({
  toggleLocker,
  dValue,dataTestId,
  handleSelectChange,
  name,
  id,
  data,
}) => {
  return (
    <div>
      <select
        data-testid={dataTestId}
        onChange={handleSelectChange}
        defaultValue={dValue}
      
        className="btn"
        name={name}
        id={id}
      >
        {data &&
          data.map((item) => {
            return (
              <option
                data-testid={dataTestId}
              
                onChange={toggleLocker}
                value={item.val}
              >
                {item.tagName}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectBox