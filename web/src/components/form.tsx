import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { Section, Form, SelectCountry, InputCountry, InputMeta, ButtonAdd } from '../styles/form';

import api from '../services/api';

import apiRestCountries from '../services/apiRestCountries';

interface Countries {
  country: string;
  urlFlag: string;
}

function FormCountries() {
  const [restCountries, setRestCountries] = useState<Countries[]>([]);
  const [countryAndFlag, setCountryAndFlag] = useState('');
  const [location, setLocation] = useState('');
  const [meta, setMeta] = useState('');


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

  return (
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
            onChange={event=> setMeta(event.target.value)}
            placeholder="mês/ano" 
          />          
          </InputMeta>
          <ButtonAdd>Adicionar</ButtonAdd>
        </Form>
      </Section>
  );
}

export default FormCountries;