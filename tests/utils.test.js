const isInvalidId = (id) => {
  return Number.isNaN(parseInt(id, 10));
};

describe('testing functions', () => {

  it('should be false for 10', function () {
    const result = isInvalidId("10");
    expect(result).toBeFalsy();
  });

  it('should be false for N', function () {
    const result = isInvalidId("N");
    expect(result).toBeTruthy();
  });
    
  
});