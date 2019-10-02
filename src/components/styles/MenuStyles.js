import styled from "styled-components";

const MenuStyles = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  li {
    font-size: 22px;
    color: black;
    font-weight: 500;
    color: #fff;
  }
  a {
    color: #fff;
    font-weight: 500;
  }
  .active {
    border-bottom: 0.2rem solid #fff;
  }
`;
export default MenuStyles;
