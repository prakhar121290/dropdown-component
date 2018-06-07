import React from 'react';
import RadioButtonsGroup from './inputBox.js';
import CheckboxesGroup from './dropDown.js';
import FormDialog from './clearbutton.js';
import MultipleSelect from "./select.js";
import MultiSelectBoolean from "./MultiSelectBoolean.js";
import Parent from "./parent.js";
export default class App extends React.Component {
	render() {
		return (
			<div>
				<h3> React Drop-Down Component</h3>
				<Parent />
			</div>
		);
	}
}