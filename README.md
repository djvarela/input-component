# Imput Component
The user interface of this challenger is built using the React library. This project is part of the [devChallenges](https://devchallenges.io/) challenges in the Front-End track.

The <Input /> component:

`<Input type="text" label="Text Test" helperText='Text Test'/>`

It accepts a series of props to configure the component:

**helperText** => Adds a `<small>` tag with text inside.
**icon** => Receives the value that will be replaced by the icon.
**typeIcon** => Indicates the position the icon will take in relation to the component's text (children), either "startIcon" or "endIcon".
**label** => The text contained in the `<label>` tag that accompanies the input.
**type** => Indicates the input type it receives, default is "text".
**placeholder** => Sets the input's placeholder text, default is "Placeholder".
**disabled** => Controls the input's disabled condition. When the prop with the same name is set to true, it **disables** the input.
**size** => Sets predefined sizes: '*sm*', '*lg*', and '*full*'.
**color** => Defines the border color.
**value** => Represents the input's content. It's not recommended for direct use since it's typically managed by useState.
**multiline** => Replaces the input with a `<textarea>` with a specified number of rows. To render it, set it to true.
**rows** => Indicates the size of the textarea, default is 10.

To select icons, use [Google Fonts Icons](https://fonts.google.com/icons).

PS: This project will continue to improve with practice.