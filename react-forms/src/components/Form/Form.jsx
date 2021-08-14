import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import style from './Form.module.scss';
import { ZERO } from '../../constants/constants';

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [newsletter, setNewsletter] = useState('yes');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName }));
    }
  };
  useEffect(() => {
    validate();
  }, [agree, firstName, lastName, country, birthDate, newsletter]);
  const reset = () => {
    setAgree(false);
    setCountry('Russia');
    setBirthDate('');
    setLastName('');
    setFirstName('');
    setNewsletter('yes');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === ZERO) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, birthDate, country, agree, newsletter },
      ]);
      reset();
    }
  };

  return (
    <div className={style.form_wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.item} htmlFor="firstName">
          <div className={style.field_name}>
            Name:
            {errors?.firstName === '' && (
              <span className={style.errors}>* name should be fill</span>
            )}
          </div>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className={style.item} htmlFor="lastName">
          <div className={style.field_name}>
            Surname:
            {errors?.lastName === '' && (
              <span className={style.errors}>* surname should be fill</span>
            )}
          </div>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className={style.item} htmlFor="birthDate">
          <div className={style.field_name}>
            Birth date:
            {errors?.birthDate === '' && (
              <span className={style.errors}>* birth date should be check</span>
            )}
          </div>
          <input
            type="date"
            name="lastName"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
        </label>
        <label className={style.item} htmlFor="country">
          <div className={style.field_name}>Country:</div>
          <select
            className={style.select}
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="Russia">Russia</option>
            <option value="Germany">Germany</option>
            <option value="Belarus">Belarus</option>
          </select>
        </label>

        <div className={style.item}>
          <div className={style.field_name}>
            Want to subscribe our newsletter?
          </div>
          <div className={style.switch_field}>
            <input
              type="radio"
              id="radio-one"
              name="switch-one"
              value="yes"
              checked={newsletter === 'yes'}
              onChange={(event) => {
                setNewsletter(event.target.value);
              }}
            />
            <label htmlFor="radio-one">Yes</label>
            <input
              type="radio"
              id="radio-two"
              name="switch-one"
              value="no"
              checked={newsletter === 'no'}
              onChange={(event) => {
                setNewsletter(event.target.value);
              }}
            />
            <label htmlFor="radio-two">No</label>
          </div>
        </div>

        <label htmlFor="agree" className={style.agree}>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
          />
          <div className={style.field_name}>
            I agree to the terms of service
            {errors?.agree !== undefined && (
              <span className={style.errors}>* agree should be check</span>
            )}
          </div>
        </label>
        <div className={style.button}>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  setFormValues: PropTypes.func,
};

export default Form;
