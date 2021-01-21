import styled from 'styled-components';

export const Section = styled.section`
  height: 247px;
  top: 38px;
  margin-bottom: 53px;
  background: #4f9419;
  @media (max-width: 986px) {
    height: 350px;
  }
`;

export const Form = styled.form`
  padding-top: 60px;
  align-items: flex-end;
  display:flex;
  flex-wrap: wrap;
`;

export const SelectCountry = styled.div`
  label {
    display:flex;
    align-content: space-around;
    margin-left: 72px;
    font-size: 16px;
    line-height: 18,75px;
    color: #FFF;
  @media (max-width: 986px) {
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
  @media (max-width: 986px) {
    margin-left: 34px;
    margin-bottom: 10px; 
  }
  }
`;

export const InputCountry = styled.div`
  label {
    display:flex;
    margin-left: 34px;
    font-size: 16px;
    line-height: 18,75px;
    color: #FFF;
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
  @media (max-width: 986px) {
    margin-bottom: 10px; 
  }
  }
`;

export const InputMeta = styled.div`
  label {
    display:flex;
    margin-left: 34px;
    font-size: 16px;
    line-height: 18,75px;
    color: #FFF;
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
  @media (max-width: 986px) {
    margin-bottom: 10px; 
  }
    }
`;

export const ButtonAdd = styled.button`
    margin-left: 34px;
    align-content: center;
    width: 203px;
    height: 49px;
    background: #006C18;
    border-radius: 7px;
    border: none;
    color: #FFF;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
    border: none;
`;