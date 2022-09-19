import React from "react";
import styled from "styled-components";



const Message = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
export default styled(Message)`
  position: fixed;
  top: 6rem;
  left: 1rem;
  border-radius: 15px;
  padding 1rem;
  color:#fff;
  background: ${(props) => (!props.type ? "#bd1414" : "#47e954")}
  
 
`;
