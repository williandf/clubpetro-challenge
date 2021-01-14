import React, { FormEvent, useEffect, useState } from 'react';
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
  country: string;
  flag: string;
}

function Landing() {
  const [cards, setCards] = useState<Card[]>([]);
  const [restCountries, setRestCountries] = useState<Countries[]>([]);
  
  const [country, SetCountry] = useState('');
  const [location, SetLocation] = useState('');
  const [meta, SetMeta] = useState('');

  useEffect(() => {
    api.get('cards').then(response => {
      setCards(response.data);
    })
  }, []);

  useEffect(() => {
    apiRestCountries.get('all?fields=translations;flag').then(response => {

      const countries = response.data.map( (country: { translations: { br: string; }; flag: string; }) => {
        return {
          country: country.translations.br,
          flag: country.flag
        }
      }).sort((a: { country: number; }, b: { country: number; }) => {
        if (a.country > b.country) {
          return 1;
        }
        if (a.country < b.country) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      setRestCountries(countries);
    });
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({
      country,
      location,
      meta
    })
  }

  return(
    <div id="page-landing">
      <Header>
        <img src={ImgLogo} alt="Logo"/>
      </Header>
      <Section>
        <Form onSubmit={handleSubmit}>
          <SelectCountry>
          <label>País:</label>
          <select name="country" value={country} onChange={event => SetCountry(event.target.value)}>
          <option value="" disabled >Selecione</option>
          {restCountries.map((countries) => ( 
            <option key={countries.country} value={countries.country}>{countries.country}</option>
            ))}
          </select>
          </SelectCountry>
          <InputCountry>
          <label>Local:</label>
          <input type="text" value={location} onChange={event=> SetLocation(event.target.value)} placeholder="Digite o local que deseja conhecer" />
          </InputCountry>
          <InputMeta>
          <label>Meta:</label>
          <input type="text" value={meta} onChange={event => SetMeta(event.target.value)} placeholder="mês/ano" />
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