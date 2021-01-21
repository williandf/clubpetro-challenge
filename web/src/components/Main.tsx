import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

import api from "../services/api";

import { Main, Wrapper, Icons, Flag, Country, Data } from "../styles/main";

interface Card {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

function MainCountries() {
  const history = useHistory();

  const [cards, setCards] = useState<Card[]>([]);
  
  useEffect(() => {
    api.get('cards').then(response => {
      setCards(response.data);
    })
  }, []);

  
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

  return (
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
  );
}

export default MainCountries;
