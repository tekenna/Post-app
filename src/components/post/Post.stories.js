import React from 'react';
import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
    <Post content="testing the kini" date="1/1/1" />
);

export const Default = Template.bind({});
