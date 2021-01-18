import React from 'react';
import ReactMarkdown from 'react-markdown-it';

export default function Markdown(props) {
  return <ReactMarkdown source={props.children} />
}
