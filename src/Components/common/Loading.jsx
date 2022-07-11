import React from 'react'

const Loading = ({title,dataTestId}) => {
  return (
    <h3 className="loader" data-testid={dataTestId}>
      {title}
    </h3>
  );
}

export default Loading