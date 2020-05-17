import styled from 'styled-components';
import { shade } from 'polished';

export const InfoContainer = styled.div`
  background-color: #ffff;
  max-width: 650px;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 30px;
  font-weight: bold;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  margin: 32px auto;
  max-width: 650px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    height: 70px;
    border-radius: 5px 0 0 5px;
    font-size: 24px;
    @media (max-width: 500px) {
      border-radius: 5px 5px 5px 5px;
    }
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
    @media (max-width: 500px) {
      width: 100%;
      margin-top: 32px;
      border-radius: 5px 5px 5px 5px;
    }
  }
`;

export const Result = styled.div`
  width: 50%;
  height: 50px;
  background-color: #fff;
  border: 1px solid rgba(55, 55, 55, 0.15);
  border-radius: 10px;
  color: #333333;
  font-weight: 400;
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  width: 100%;
`;
