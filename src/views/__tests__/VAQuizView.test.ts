import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import { server } from '@/mocks/Apollo'
import sut from '../VAQuizView.vue'

describe('VAQuizView', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render correctly', () => {
    render(sut)

    expect(screen.getByTestId('search-anime')).toBeTruthy()
  })

  it('should render anime list and pagination', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(() => {
      expect(screen.getByAltText('ONE PIECE')).toBeTruthy()
      expect(screen.getByAltText('ONE PIECE (Movie)')).toBeTruthy()
      expect(screen.getByText('1')).toBeTruthy()
    })
  })

  it('should search clicked page', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(async () => {
      await fireEvent.click(screen.getByText(2))
    })
    await waitFor(() => {
      expect(screen.getByAltText('ONE PIECE (Movie)')).toBeTruthy()
      expect(screen.queryByAltText('ONE PIECE')).toBeNull()
    })
  })
})