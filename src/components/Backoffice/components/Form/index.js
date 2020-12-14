import React from 'react';
import { editCountry } from '../../requests';
import './style.scss';

const Form = () => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      editCountry();
    }}
  >
    <input
      className="form__input"
      type="text"
      placeholder="Entrez la nouvelle donnée"
      value=""
      // onChange={(event) => changeInputValue(event.target.value)}
    />
    <button type="submit" className="form__button">
      Envoyer
    </button>
  </form>
);

export default Form;
