import styled from 'styled-components';
import { shade } from 'polished';

export const InfoContainer = styled.div`
  background-color: #ffff;
  max-width: 650px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 70px;
`;

export const Form = styled.form`
  display: flex;
  margin: 32px auto;
  max-width: 650px;

  flex-wrap: wrap;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    height: 70px;
    border-radius: 5px 0 0 5px;
    font-size: 24px;
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #0074e4;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0074e4')};
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 350px;
  margin: auto;

  th {
    color: #d5dde5;
    background: #333333;
    border-bottom: 4px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    padding: 12px;
  }
  th:first-child {
    border-top-left-radius: 3px;
  }

  th:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  tr {
    border-top: 1px solid #c1c3d1;
    border-bottom: 1px solid #c1c3d1;
    color: #666b85;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd) td {
    background: #ebebeb;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }

  td {
    background: #ffffff;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 18px;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #c1c3d1;
  }
  td:last-child {
    border-right: 0px;
  }

  th.text-left {
    text-align: left;
  }

  th.text-center {
    text-align: center;
  }

  th.text-right {
    text-align: right;
  }

  td.text-left {
    text-align: left;
  }

  td.text-center {
    text-align: center;
  }

  td.text-right {
    text-align: right;
  }
`;
