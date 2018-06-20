import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted, textare gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
