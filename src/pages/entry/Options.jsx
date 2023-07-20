import { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';
import AlertBanner from '../common/AlertBanner';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponents = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemComponents key={item.name} name={item.name} imagePath={item.imagePath} />
  ));

  return <div>{optionItems}</div>;
};

export default Options;
