import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

import ImgLogo from '../images/logo.svg';
import api from '../services/api';
import apiRestCountries from '../services/apiRestCountries';

import Header from '../components/header';
import { Main, Wrapper, Flag, Icons, Country, Data } from '../components/main';
import { Section, Form, SelectCountry, InputCountry, InputMeta, ButtonAdd } from '../components/form';


interface Card {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

interface Countries {
  flag: string;
  translations: {
    br: string;
  };
}

function Landing() {
  const [cards, setCards] = useState<Card[]>([]);
  const [restCountries, setRestCountries] = useState<Countries[]>([]);
  
  useEffect(() => {
    api.get('cards').then(response => {
      setCards(response.data);
    })
  }, []);

  useEffect(() => {
    apiRestCountries.get('all?fields=translations;flag').then(response => {
      setRestCountries(response.data);
    });
  }, []);

  return(
    <div id="page-landing">
      <Header>
        <img src={ImgLogo} alt="Logo"/>
      </Header>
      <Section>
        <Form>
          <SelectCountry>
          <label>País:</label>
          <select name="country">
          <option value="">Selecione</option>
          {restCountries.map((Countries, index) => {
            return (
              <option key={index} value={Countries.translations.br}>{Countries.translations.br}</option>
            )
          })}
          </select>
          </SelectCountry>
          <InputCountry>
          <label>Local:</label>
          <input id="local" type="text" name="local" placeholder="Digite o local que deseja conhecer" />
          </InputCountry>
          <InputMeta>
          <label>Meta:</label>
          <input id="meta" name="meta" placeholder="mês/ano" />
          </InputMeta>
          <ButtonAdd>
          <button>Adicionar</button>
          </ButtonAdd>
        </Form>
      </Section>
        <Main>
        {cards.map((card) => {
                  return (
          <Wrapper key={card.id}>
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