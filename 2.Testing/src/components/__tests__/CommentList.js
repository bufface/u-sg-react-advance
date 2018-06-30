import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it('crates one LI per comment', () => {});
