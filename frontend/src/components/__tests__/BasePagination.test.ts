import { render, screen, fireEvent } from '@testing-library/vue'
import sut from '../BasePagination.vue'

describe('BasePagination', () => {
  it('should render correctly', () => {
    render(sut, {
      props: {
        page: {
          currentPage: 2,
          perPage: 10,
          lastPage: 11
        },
      }
    })

    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.queryByText('3')).toBeFalsy()
    expect(screen.getByText('11')).toBeTruthy()
    expect(screen.getByText('...')).toBeTruthy()
  })

  it('should emit change event on click correctly', async () => {
    const { emitted } = render(sut, {
      props: {
        page: {
          currentPage: 12,
          perPage: 3,
          lastPage: 22,
          hasNextPage: true
        },
      }
    })

    expect(screen.getByText('12')).toBeTruthy()
    await fireEvent.click(screen.getByText('13'))
    expect(emitted()).toHaveProperty('change')
    expect(emitted()['change'].flat()[0]).toBe(13)
  })
})