

describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  });

  it('does the right number of comparisons', function(){
    window.bubbleSort([4, 3, 2, 1]);
    expect(window.swap.calls.count()).toEqual(6);
    expect(window.comparison.calls.count()).toEqual(6);
  });

  it('handles an empty array', function(){
   expect( bubbleSort([]) ).toEqual( [] );
  });
   it('handles a single item', function(){
   expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles multiple items', function(){
   expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );
  });

});
