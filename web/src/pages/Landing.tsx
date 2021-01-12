import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

import ImgLogo from '../images/logo.svg';


import Header from '../components/header';
import { Main, Wrapper, Flag, Icons, Country, Data } from '../components/main';

function Landing() {
  return(
    <div id="page-landing">
      <Header>
        <img src={ImgLogo} alt="Logo"/>
      </Header>

        <Main>
          <Wrapper>
            <Icons>
              <EditIcon className="editIcon"/>
              <ClearIcon className="clearIcon"/>
            </Icons>
            <Flag>
              <img src="https://restcountries.eu/data/bra.svg" alt="Country"/>
            </Flag>
            <Country>
              <p>Brasil</p>
            </Country>
            <Data>
              <p className="data-location">Local: Balneario Camboriu</p>
              <p>Meta: 04/2022</p>
            </Data>
          </Wrapper>
        </Main>
    </div>
  );
}

export default Landing;