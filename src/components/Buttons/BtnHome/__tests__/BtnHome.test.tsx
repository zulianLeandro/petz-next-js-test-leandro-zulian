import React from 'react';
import { render } from '@testing-library/react';
import Button from '../BtnHome'; // Certifique-se de que o caminho para o componente esteja correto
import '@testing-library/jest-dom';

test('renderiza o componente Button com o texto "Clique em mim"', () => {
  const { getByText } = render(<Button />);
  const buttonElement = getByText('Clique em mim');

  expect(buttonElement).toBeInTheDocument();
});