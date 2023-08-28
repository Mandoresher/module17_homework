import { sum } from './sum'

describe('test descs', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('adds 5 + 666 to equal 671', () => {
    expect(sum(5, 666)).toBe(671);
  });
})

