import { actions } from '../../../../../../src/store/counter';

jest.mock('axios');

describe('store/counter/actions/increment', () => {
  it('should have been called the specified action', () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    const wrapper = (actions: any) => actions.increment({ dispatch, commit });

    wrapper(actions);

    expect(commit.mock.calls).toEqual([['INCREMENT']]);
  });
});
