import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

import api from "../../services/api";

import * as S from "./styles";

interface Card {
  id: string;
  country: string;
  urlFlag: string;
  location: string;
  meta: string;
}

interface Props {
  cards: Card[];
  getCountries: () => Promise<void>;
}

function MainCountries({ cards, getCountries }:Props) {
  const history = useHistory();
  
  async function handleDeleteCard(id: string) {
    try {
      await api.delete(`cards/${id}`).then(response => {
        if (response.status === 204) {
          alert('País deletado com sucesso');
          getCountries()
        }
      });
    } catch (err) {
      alert('Erro ao deletar card, tente novamente.');
    }
  }

  function handleEditCard(id: string) {
      history.push(`/card/${id}`);
    };

  return (
    <S.Main>
         {cards.map((card) => {
                  return (
          <S.Wrapper key={card.id}>
            <S.Icons>
              <EditIcon className="editIcon" onClick={() => handleEditCard(card.id)} type="button"/>
              <ClearIcon className="clearIcon" onClick={() => handleDeleteCard(card.id)} type='button'/>
            </S.Icons>
                <S.Flag>
                  <img src={card.urlFlag} alt={card.country}/>
                </S.Flag>
                <S.Country>
                  <p>{[card.country]}</p>
                </S.Country>
                <S.Data>
                  <p className="data-location">Local: {[card.location]}</p>
                  <p>Meta: {[card.meta]}</p>
                </S.Data>
          </S.Wrapper>
          )})}
        </S.Main>
  );
}

export default MainCountries;
