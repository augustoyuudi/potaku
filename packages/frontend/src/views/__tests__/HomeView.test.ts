import { render, screen } from '@testing-library/vue'
import router from '@/router'
import sut from '../HomeView.vue'

describe('HomeView', () => {
  it('should render correctly', () => {
    render(sut, {
      global: {
        plugins: [router],
      }
    })
    expect(screen.getByText('potaku')).toBeTruthy()
    expect(screen.getByText('Guess the voice actor')).toBeTruthy()
  })
})