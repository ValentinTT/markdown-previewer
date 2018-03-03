import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import './App.css';

const Title = ({ children }) => (
	<h4>{children}</h4>
)

let TextArea = ({ state, dispatch }) => (
	<textarea
		className="text-area"
        cols="30" rows="10"
        defaultValue={ state }
		onChange={(e) => {
			dispatch({
				type: "MARKDOWN_CHANGED",
				text: e.target.value
			});
		}}
	/>
)

TextArea = connect(state => ({state}))(TextArea);

const InputMarkdown = ({ onChange }) => (
	<div className="input-markdown">
		<Title>Input Markdown</Title>
		<TextArea />
	</div>
)

const Previewer = ({ text }) => (
	<div
		className="previewer"
		dangerouslySetInnerHTML={{
			__html: text
		}}
	/>
)

const mapStateToProps = state => {
	return {
		text: markdownToHTML(state)
	}
}

const PreviewerContainer = connect(mapStateToProps, null)(Previewer);

const OutputMarkdown = ({ text }) => (
	<div className="output-markdown" >
		<Title>Output Markdown</Title>
		<PreviewerContainer />
	</div>
)

const Markdown = () => (
	<section className="markdown-section" >
		<InputMarkdown />
		<OutputMarkdown />
	</section>
)

const Header = () => (
	<header>
		<h2>Markdown Previewer</h2>
	</header>
)

const Footer = () => (
	<footer>
        <h4>Coded by <a 
        rel="noopener noreferrer"
		href="https://github.com/ValentinTapiaTorti"
		target="_blank" >Valentin TT</a>.</h4>
	</footer>
)

const markdownToHTML = (markdown) => (
	markdown === undefined
		? null
		: marked(markdown)
)

const App = () => (
	<div className="App">
		<Header />
		<Markdown />
		<Footer />
	</div>
)

export default App;