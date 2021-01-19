import InputMask from 'react-input-mask';
import { Section, Form, SelectCountry, InputCountry, InputMeta, ButtonAdd } from '../components/form';




function EditCard() {

  return (
    <Section>
        <Form>
          <SelectCountry>
          <label>País:</label>
          <select 
            name="country" 
          >
          <option disabled >Selecione</option>
          <option >Selecione</option>
          </select>
          </SelectCountry>
          <InputCountry>
          <label>Local:</label>
          <input type="text" placeholder="Digite o local que deseja conhecer" />
          </InputCountry>
          <InputMeta>
          <label>Meta:</label>
          <InputMask 
            mask="99/9999" 
            type="text"   
            placeholder="mês/ano" 
          />          
          </InputMeta>
          <ButtonAdd>Salvar</ButtonAdd>
        </Form>
      </Section>
  );
};

export default EditCard;