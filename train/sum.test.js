import { sum } from './sum'

describe('test sums', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('adds 5 + 666 to equal 671', () => {
    expect(sum(5, 666)).toBe(671);
  });

  it('adds 666 + 111 to equal 777', () => {
    expect(sum(666, 111)).toBe(777);
  });
})

