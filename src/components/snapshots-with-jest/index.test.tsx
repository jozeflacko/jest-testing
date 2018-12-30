import * as React from 'react';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<a className="link" href="http://www.google.com">Google</a>).toJSON();
  expect(tree).toMatchSnapshot();
});

/*
// using prettier
it('renders correctly with inline snashotu', () => {
    const tree = renderer.create(<a className="link" href="http://www.google.com">Google</a>).toJSON();
    expect(tree).toMatchInlineSnapshot();
});*/

/**
 * Property Matchers
 */
/*
it('will check the matchers and pass', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
    //will fail every time
    //expect(user).toMatchSnapshot();

    
    expect(user).toMatchSnapshot<typeof user>({
        createdAt: expect.any(Date),
        id: expect.any(Number)
    });
  });
  */