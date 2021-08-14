import React, { useState } from 'react';
import Form from './Form/Form';
import Card from './Card/Card';
import style from './App.module.scss';

const App = () => {
  const [formValues, setFormValues] = useState([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main className={style.main}>
        {formValues.map((item, idx) => {
          return <Card item={item} key={idx} />;
        })}
      </main>
    </div>
  );
};

export default App;
