import React, { FormEvent, useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

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
  urlFlag: string;
}

function Landing() {
  const history = useHistory();

  const [cards, setCards] = useState<Card[]>([]);
  const [restCountries, setRestCountries] = useState<Countries[]>([]);

  const [countryAndFlag, setCountryAndFlag] = useState('');
  const [location, setLocation] = useState('');
  const [meta, setMeta] = useState('');

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
          urlFlag: country.flag
        }
      }).sort((a: { country: string; }, b: { country: string; }) => {
        return a.country.localeCompare(b.country);
      });
      setRestCountries(countries);
    });
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const obj = JSON.parse(countryAndFlag);
    const country = obj.country;
    const urlFlag = obj.urlFlag;

    const data = {
      country,
      urlFlag,
      location,
      meta,
    }

    await api.post('cards', data).then(response => {
      if (response.status === 201) {
      alert('Adicionado Com Sucesso');
      setCountryAndFlag('');
      setLocation('');
      setMeta('');
      }
    }).catch(error => {
      alert(`${error.response.data.message}`);
    });
    
  }

  async function handleDeleteCard(id: string) {
    try {
      await api.delete(`cards/${id}`).then(res => console.log(res.data));

      setCards(cards.filter(card => card.id !== id));
    } catch (err) {
      alert('Erro ao deletar card, tente novamente.');
    }
  }

  function handleEditCard(id: string) {
      history.push(`/card/${id}`);
    };

  return(
    <div id="page-landing">
      <Header>
        <img src={ImgLogo} alt="Logo"/>
      </Header>
      <Section>
        <Form onSubmit={handleSubmit}>
          <SelectCountry>
          <label>País:</label>
          <select 
            name="country" 
            value={countryAndFlag} 
            onChange={event => setCountryAndFlag(event.target.value)}
          >
          <option value="" disabled >Selecione</option>
          {restCountries.map((countries) => ( 
            <option 
              key={countries.country} 
              value={JSON.stringify({country: countries.country, urlFlag: countries.urlFlag})}>
                {countries.country}
            </option>
            ))}
          </select>
          </SelectCountry>
          <InputCountry>
          <label>Local:</label>
          <input 
            type="text" 
            value={location} 
            onChange={event=> setLocation(event.target.value)} 
            placeholder="Digite o local que deseja conhecer" />
          </InputCountry>
          <InputMeta>
          <label>Meta:</label>
          <InputMask 
            mask="99/9999" 
            type="text" 
            value={meta} 
            onChange={event => setMeta(event.target.value)} 
            placeholder="mês/ano" 
          />          
          </InputMeta>
          <ButtonAdd>Adicionar</ButtonAdd>
        </Form>
      </Section>
        <Main>
        {cards.map((card) => {
                  return (
          <Wrapper key={card.id}>
            <Icons>
              <EditIcon className="editIcon" onClick={() => handleEditCard(card.id)} type="button"/>
              <ClearIcon className="clearIcon" onClick={() => handleDeleteCard(card.id)} type='button'/>
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