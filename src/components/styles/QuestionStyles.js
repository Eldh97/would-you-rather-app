import styled from "styled-components";

const QuestionStyles = styled.div`
  border-radius: 4px;
  margin-top: 20px;
  border: 2px solid #282c35;
  text-align: left;
  padding: 12px;
  .content {
    display: flex;
    text-align: center;
    & > * {
      flex-basis: 49%;
    }
    .image__container {
      text-align: left;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .description {
      flex-basis: 89%;
    }
    .link {
        background-color: #282C35;
        padding: 5px 10px;
        color: #fff;
    }
  }
`;
export default QuestionStyles;
