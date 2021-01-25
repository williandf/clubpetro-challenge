import { useEffect, useState } from 'react';
import HeaderComponent from '../components/Header';
import FormComponent from '../components/Form';
import MainComponent from '../components/Main';

import api from "../services/api";

interface Card {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

function Landing() {
  const [cards, setCards] = useState<Card[]>([]);

  const getCountries = () => {
    return api.get('cards').then(response => {
      setCards(response.data);
    })
  }
  
  useEffect(() => {
    getCountries()
  }, []);

  return(
    <div id="page-landing">
      <HeaderComponent />
      <FormComponent getCountries={getCountries} />
      <MainComponent cards={cards} getCountries={getCountries} />                        
    </div>
  );
}

export default Landing;