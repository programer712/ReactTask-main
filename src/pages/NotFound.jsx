import React from "react";
import styled from "styled-components";

const NotFound = ({ className }) => {
  return <div className={className}>Not found</div>;
};

export default styled(NotFound)`
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px',
`;
