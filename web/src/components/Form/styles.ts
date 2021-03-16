import styled from 'styled-components';

export const Section = styled.section`
  height: 247px;
  margin-bottom: 53px;
  background: #4f9419;
  @media (max-width: 1550px) {
    height: 350px;
  }
`;

export const Form = styled.form`
  padding-top: 60px;
  align-items: flex-end;
  display:flex;
  @media (max-width: 1550px) {
    padding-top: 40px;
    display: grid;
    justify-content: center;
  }
`;

export const SelectCountry = styled.div`
  label {
    display: flex;
    align-content: space-around;
    margin-left: 72px;
    font-size: 16px;
    line-height: 18.75px;
    color: #fff;
  @media (max-width: 1550px) {
    margin-left: 34px;  
    }
  }
  select {
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
  @media (max-width: 1550px) {
    margin-left: 34px;
    margin-bottom: 15px; 
    }
  }
`;

export const InputCity = styled.div`
  label {
    display: flex;
    margin-left: 34px;
    font-size: 16px;
    line-height: 18.75px;
    color: #fff;
  }
  input {
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
  @media (max-width: 1550px) {
    margin-bottom: 15px; 
    width: 303px;
    }
  }
`;

export const InputMeta = styled.div`
  label {
    display: flex;
    margin-left: 34px;
    font-size: 16px;
    line-height: 18.75px;
    color: #fff;
  }
  input {
    width: 238px;
    height: 48px;
    margin-left: 28px;
    border-radius: 7px;
    font-size: 16px;
    line-height: 18.75px;
    color: #868686;
    padding-left: 18px;
    margin-left: 34px;
    border: none;
  @media (max-width: 1550px) {
    margin-bottom: 15px;
    width: 303px;
    }
  }
`;

export const ButtonAdd = styled.button`
    margin-left: 34px;
    align-content: center;
    width: 203px;
    height: 49px;
    background: #006c18;
    border-radius: 7px;
    border: none;
    color: #fff;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
    border: none;
  @media (max-width: 1550px) {
    width: 303px;
  }
`;