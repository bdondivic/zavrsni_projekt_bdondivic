import React from 'react' 
import '@testing-library/jest-dom/extend-expect' 

import {render, screen, cleanup} from '@testing-library/react' 
import User from '../User' 

jest.mock('axios')

test('render User', () => {
      render(<User/>)
      const userElement = screen.getByTestId('user')
      expect(userElement).toBeInTheDocument()
})

test('Ima tekst', async () => {
      const welcomeRender = render(
          <BrowserRouter>
            <User/>
          </BrowserRouter>
      );
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/api/user');
    await welcomeRender.findByTestId('user-test-1');
    expect(welcomeRender.queryByText('Favoriti')).toBeInTheDocument();
});