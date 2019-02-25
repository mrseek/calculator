import React, { Component } from 'react';

export default class Output extends React.Component {
	render() {
		return (
			<div className="result">
				<p>{this.props.result}</p>
			</div>
		);
	}
}
