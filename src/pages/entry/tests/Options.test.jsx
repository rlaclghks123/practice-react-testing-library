import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImg = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImg).toHaveLength(2);

  const scoopAltText = scoopImg.map((element) => element.alt);
  expect(scoopAltText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image for each topping option from server', async () => {
  render(<Options optionType="toppings" />);
  const toppingImg = await screen.findAllByRole('img', { name: /topping$/i });
  expect(toppingImg).toHaveLength(3);

  const toppingAltText = toppingImg.map((element) => element.alt);
  expect(toppingAltText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
