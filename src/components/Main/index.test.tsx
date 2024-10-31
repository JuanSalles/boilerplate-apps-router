import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
