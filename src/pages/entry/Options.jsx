import { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: 에러처리
      });
  }, [optionType]);

  // TODO : Topping Component 만든뒤 null 변경하기
  const ItemComponents = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemComponents key={item.name} name={item.name} imagePath={item.imagePath} />
  ));

  return <div>{optionItems}</div>;
};

export default Options;
