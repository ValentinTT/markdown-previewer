import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import "milligram";

function markdownReducer(state = "", action) {
	switch (action.type) {
		case "MARKDOWN_CHANGED":
			return action.text;
		default:
			return state;
	}
}

const intialState = `# This is an h1 tag
## This is an h2 tag
###### This is an h6 tag

Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

1. Item 1
1. Item 2
  * Item 2a
  * Item 2b

As Kanye West said:

> We're living the future so
> the present is our past.`;

render(
	<Provider store={createStore(markdownReducer, intialState)}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();