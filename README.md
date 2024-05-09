# Simple Registration Form
This project contains a simple registration form created as part of the Week 10 Lab Assignment for a Web Programming course. It incorporates HTML, Bootstrap, and JavaScript to build a user-friendly form with client-side validation and dynamic output display upon submission.

## Project Contents
- `index.html`: The main HTML file containing the registration form.
- `script.js`: JavaScript code for form validation and event handling.
- `README.md`: This document, providing an overview and usage instructions.

## Form Components
The registration form consists of the following sections:
- **Student's Name**: Text field for the student's name.
- **Date of Birth**: Date picker with a maximum limit set to the current date.
- **Gender**: Dropdown for selecting gender (Male/Female).
- **Email Address**: Text field with regex pattern validation.
- **Phone Number**: Dropdown for country code and a text field for the phone number.
- **Home Address**: Textarea for entering the home address.
- **Program of Interest**: Dropdown to choose a program of study.
- **Father's and Mother's Names**: Separate text fields for entering parental names.
- **Student's Photo**: File input to upload an image, with a constraint to only accept valid image formats.

## JavaScript Validation
The JavaScript code includes:
- All fields marked as required.
- Validation for the `Date of Birth` field (not exceeding today's date).
- Email validation using a regex pattern.
- Phone number validation requiring 8 to 11 digits (excluding the country code).
- File input validation ensuring only image files are accepted.

## Submission Process
- The form's `submit` event is intercepted to prevent default form submission behavior.
- The form data is serialized and displayed in a formatted table upon submission.
- A preview of the uploaded photo is generated, with validation to ensure the file is a valid image.
- The output is displayed in a designated `output` div in the HTML.

## Setup and Usage
To use this project:
1. Clone or download the repository.
2. Open `index.html` in a web browser to view and interact with the registration form.
3. Fill out the form and click `Submit!` to see the generated output.
4. Ensure your internet connection allows access to Bootstrap's CDN for CSS and JS files.
5. Make sure JavaScript is enabled in your browser.

## Notes
- This project is intended for educational purposes as part of a lab assignment.
- The validation is client-side only; for real-world applications, server-side validation and security checks are required.
- Be cautious when handling sensitive data through client-side JavaScript.

## Licensing and Contributions
- This project is open source, primarily for educational use.
- Contributions and modifications are welcome. Follow standard open-source contribution practices.
- If you have suggestions or issues, please create a new issue on the repository's GitHub page.

## Contact
If you encounter any issues or have questions, please contact:
- Email: abenedict01@student.ciputra.ac.id
