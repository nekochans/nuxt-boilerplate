import { mutations } from '../../../../../src/store/counter';
const { DECREMENT } = mutations;

describe('store/counter/actions/increment', () => {
  it('should have been called the specified mutation', () => {
    const state = { counter: 1 };

    DECREMENT(state, {});

    expect(state.counter).toEqual(0);
  });
});
