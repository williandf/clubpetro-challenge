import styled from 'styled-components';

export const Section = styled.section`
  height: 247px;
  top: 38px;
  margin-bottom: 53px;
  background: #4f9419;
`;

export const Form = styled.form`
  align-items: center;
  justify-content: center;
`;

export const FormData = styled.div`
  display:flex;
  flex-wrap: wrap;
  & label {
    align-content: space-around;
    margin-left: 72px;
    font-size: 16px;
    line-height: 18,75px;
    color: #FFF;
  }
  & select {
    align-content: space-around;
    width: 303px;
    height: 48px;
    border-radius: 7px;
    font-size: 16px;
    line-height: 18.75px;
    color: #868686;
    padding-left: 15px;
    margin-left: 72px;
    border: none;
  }
  & input.input-meta {
    align-content: space-around;
    width: 455px;
    height: 48px;
    border-radius: 7px;
    font-size: 16px;
    line-height: 18.75px;
    color: #868686;
    padding-left: 18px;
    margin-left: 34px;
    border: none;
  & input {
      width: 238px;
      height: 70px;
      margin-left: 28px;
    }
  }
  & button {
    align-content: space-around;
    width: 203px;
    height: 49px;
    background: #006C18;
    border-radius: 7px;
    border: none;
    color: #FFF;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
  }
`;