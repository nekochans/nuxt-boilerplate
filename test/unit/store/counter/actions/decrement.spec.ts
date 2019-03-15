import { actions } from '../../../../../src/store/counter';

jest.mock('axios');

describe('store/counter/actions/decrement', () => {
  it('should have been called the specified action', () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    const wrapper = (actions: any) => actions.decrement({ dispatch, commit });

    wrapper(actions);

    expect(commit.mock.calls).toEqual([['DECREMENT']]);
  });
});
