import styled from "styled-components";

const MenuStyles = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  .active {
    border-bottom:.2rem solid #fff; 
  }
`;
export default MenuStyles;
