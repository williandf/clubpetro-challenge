import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

import ImgLogo from '../images/logo.svg';
import api from '../services/api';

import Header from '../components/header';
import { Main, Wrapper, Flag, Icons, Country, Data } from '../components/main';

interface Card {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

function Landing() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    api.get('cards').then(response => {
      setCards(response.data);
    })
  }, []);

  return(
    <div id="page-landing">
      <Header>
        <img src={ImgLogo} alt="Logo"/>
      </Header>
      
        <Main>
        {cards.map((card, index) => {
                  return (
          <Wrapper key={index}>
            <Icons>
              <EditIcon className="editIcon"/>
              <ClearIcon className="clearIcon"/>
            </Icons>
                <Flag>
                  <img src={card.urlFlag} alt={card.country}/>
                </Flag>
                <Country>
                  <p>{[card.country]}</p>
                </Country>
                <Data>
                  <p className="data-location">Local: {[card.location]}</p>
                  <p>Meta: {[card.meta]}</p>
                </Data>
          </Wrapper>
          )})}
        </Main>
                          
    </div>
  );
}

export default Landing;