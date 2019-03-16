import { mutations } from '../../../../../src/store/counter';
const { INCREMENT } = mutations;

describe('store/counter/actions/increment', () => {
  it('should have been called the specified mutation', () => {
    const state = { counter: 0 };

    INCREMENT(state, {});

    expect(state.counter).toEqual(1);
  });
});
