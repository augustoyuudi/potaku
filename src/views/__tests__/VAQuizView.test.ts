import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import { server } from '@/mocks/apollo'
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
      expect(screen.getByText('1')).toBeTruthy()
      expect(screen.getByText('1')).toBeTruthy()
    })
  })
})