import styled from 'styled-components';

export const Main = styled.main`
  padding-left: 34px;
  padding-right: 34px;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 33px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

`
export const Icons = styled.div`
  & svg.editIcon {
    display: flex;
    position: absolute;
    width: 18px;
    height: 19px;
    margin-left: 181px;
    margin-top: 17px;
    color: #868686;
    cursor: pointer;
  }
  & svg.clearIcon {
    display: flex;
    position: absolute;
    width: 24px;
    height: 24px;
    margin-left: 215px;
    margin-top: 17px;
    color: #868686;
    cursor: pointer;
  }
`

export const Flag = styled.div`
  & img {
    margin-top: 26px;
    margin-left: 14px;
    width: 56px;
    height: 34px;
  }
`

export const Country = styled.div`
  & p {
    margin-top: 16px;
    margin-left: 8px;
    margin-right: 10px;
    padding-left: 6px;
    padding-bottom: 11px;
    font-size: 16px;
    line-height: 18.75px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4F9419;
    border-bottom: 1px solid #ABABAB;
  }
`

export const Data = styled.div`
  & p.data-location{
    margin-top: 43px;
    margin-left: 26px;
  }
  & p {
    margin-top: 11px;
    margin-left: 26px;
  }
`