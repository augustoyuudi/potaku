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

  it('should render quiz correctly', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(async () => {
      await fireEvent.click(screen.getByAltText('ONE PIECE'))
    })
    await waitFor(() => {
      const vas = screen.getAllByTestId('quiz-va')
      expect(screen.getByTestId('quiz-character')).toBeTruthy()
      expect(vas).toBeTruthy()
      expect(vas.length).toBe(5)
      expect(screen.getByText('Answer')).toBeTruthy()
      expect(screen.getByText('Randomize')).toBeTruthy()
    })
  })

  it('should change selected va border color', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(async () => {
      await fireEvent.click(screen.getByAltText('ONE PIECE'))
    })
    await waitFor(async () => {
      const vas = screen.getAllByTestId('quiz-va')
      await fireEvent.click(vas[0])
      expect(vas[0].classList.contains('border-indigo-800')).toBeTruthy()
      await fireEvent.click(vas[1])
      expect(vas[0].classList.contains('border-indigo-800')).toBeFalsy()
      expect(vas[1].classList.contains('border-indigo-800')).toBeTruthy()
    })
  })

  it('should validate va answer', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(async () => {
      await fireEvent.click(screen.getByAltText('ONE PIECE'))
    })
    await waitFor(async () => {
      const vas = screen.getAllByTestId('quiz-va')
      await fireEvent.click(vas[0])
      await fireEvent.click(screen.getByText('Answer'))
      const hasCorrectAnswer = vas.some(va => va.classList.contains('border-green-600'))
      const hasIncorrectAnswer = vas.some(va => va.classList.contains('border-rose-600'))
      expect(hasCorrectAnswer || hasIncorrectAnswer).toBeTruthy()
    })
  })

  it('should randomize character', async () => {
    render(sut)

    await fireEvent.update(screen.getByTestId('search-anime'), 'one piece')
    await waitFor(async () => {
      await fireEvent.click(screen.getByAltText('ONE PIECE'))
    })
    await waitFor(async () => {
      const vas = screen.getAllByTestId('quiz-va')
      await fireEvent.click(screen.getByText('Randomize'))
      const newVas = screen.getAllByTestId('quiz-va')
      const hasChangedVas = vas.some((va, index) => va.getAttribute('for') !== newVas[index].getAttribute('for'))
      expect(hasChangedVas).toBeTruthy()
    })
  })
})