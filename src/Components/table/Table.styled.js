import Styled from "@emotion/styled";

export default Styled.div`
.table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
    thead, tbody {
    tr {
      display: flex;
      justify-content: space-between;
      th, td {
        min-width: 16.6666666667%;
        padding: 15px;
        display: inline-block;
        text-align: center;
        border: 1px solid black;
        box-sizing: border-box;
      }
    }
  }
  .errorMessage {
    padding: 25px;
    font-size: 18px;
    font-weight: 500;
    word-break: break-all;
  }
}
`;
