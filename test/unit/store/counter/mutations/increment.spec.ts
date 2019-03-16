import { mutations } from '../../../../../src/store/counter';
const { INCREMENT } = mutations;

describe('store/counter/actions/increment', () => {
  it('should have been called the specified mutation', () => {
    const state = { count: 0 };

    INCREMENT(state, {});

    expect(state.count).toEqual(1);
  });
});
