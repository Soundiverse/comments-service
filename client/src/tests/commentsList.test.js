import React from 'react';
import { shallow } from 'enzyme';
import CommentsList from '../components/commentsList';
import CommentsEntry from '../components/commentsEntry';
import sample from '../sampleData';

test('should render 3 comments on DOM', () => {
  const wrapper = shallow(
    <CommentsList 
      comments = {sample.sampleData}
    />
  );
  expect(wrapper.find(CommentsEntry)).toHaveLength(3);
})