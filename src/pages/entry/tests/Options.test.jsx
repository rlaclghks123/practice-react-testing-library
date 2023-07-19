import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImg = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImg).toHaveLength(2);

  const altText = scoopImg.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
