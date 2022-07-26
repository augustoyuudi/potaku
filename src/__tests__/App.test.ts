import { render, fireEvent, waitFor } from '@testing-library/vue'
import router from '@/router'
import sut from '../App.vue'

describe('App', () => {
  it('should redirect to /va-quiz correctly', async () => {
    const { findByText, getByText } = render(sut, {
      global: {
        plugins: [router]
      }
    })

    expect(await findByText('Guess the voice actor')).toBeTruthy()

    await fireEvent.click(getByText('Guess the voice actor'))
    await waitFor(() => {
      expect(getByText('k')).toBeTruthy()
    })
  })
})