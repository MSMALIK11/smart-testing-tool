import React from 'react';

const SelectBox = ({
  toggleLocker,
  defaultValue,
  dataTestId,
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
        defaultValue={defaultValue}
        className="btn"
        name={name}
        id={id}
      >
        {data &&
          data.map((item) => {
            return (
              <option
                key={item.id}
                data-testid={item.testId && item.testId}
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