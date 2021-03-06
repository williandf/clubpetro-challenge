import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory, useParams } from 'react-router-dom';

import * as S from '../components/Form/styles';
import api from '../services/api';

interface RouteParams {
  id: string
}

interface Country {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

function EditCard() {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [country, setCountry] = useState<Country>();
  const [location, setLocation] = useState('');
  const [meta, setMeta] = useState('');

useEffect(() => {
  api.get(`/cards/${id}`).then(response => {
    setCountry(response.data);
    setLocation(response.data.location);
    setMeta(response.data.meta);
  })
}, [id]);

async function handleSubmit(event: FormEvent) {
  event.preventDefault();

  const data = { 
  country: country?.country,
  location, 
	meta
  }

  await api.patch(`cards/${id}`, data).then(response => {
    if (response.status === 204) {
    alert('Atualizado Com Sucesso');
    history.push('/');
    }
  }).catch(error => {
    alert(`${error.response.data.message}`);
  });
}

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit}>
        <S.InputMeta>
          <label>País:</label>
          <input 
            type="text" 
            disabled 
            placeholder={country?.country} 
          />
        </S.InputMeta>
        <S.InputCity>
          <label>Local:</label>
          <input 
            type="text" 
            value={location} 
            onChange={event=> setLocation(event.target.value)}
            placeholder={country?.location} 
          />
        </S.InputCity>
        <S.InputMeta>
          <label>Meta:</label>
        <InputMask 
          mask="99/9999" 
          type="text"   
          placeholder={country?.meta} 
          value={meta} 
          onChange={event => setMeta(event.target.value)} 
        />          
        </S.InputMeta>
        <S.ButtonAdd>Salvar</S.ButtonAdd>
      </S.Form>
    </S.Section>
  );
};

export default EditCard;