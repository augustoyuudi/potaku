import { render, screen } from '@testing-library/vue'
import { server } from '@/mocks/apollo'
import router from '@/router'
import sut from '../HomeView.vue'

describe('HomeView', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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