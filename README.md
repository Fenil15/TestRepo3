# Project Theme Information

The primary theme/background color is yellow (#FFFF00). This color choice ensures consistency and visual appeal across all pages.

This repository contains static HTML files. To view them locally, you can use a simple HTTP server. Follow the instructions below:

### Using Python (if Python is installed):

1. Open a terminal and navigate to the directory containing this repository.
2. Run the following command:
   - For Python 3:
     ```bash
     python3 -m http.server 8000
     ```
   - For Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
3. Open your web browser and go to `http://localhost:8000` to view the site.

### Using Node.js (if Node.js and npm are installed):

1. If `http-server` is not installed, install it globally using npm:
   ```bash
   npm install -g http-server
   ```
2. In your terminal, navigate to the root directory of this repository.
3. Run:
   ```bash
   http-server
   ```
4. Open your web browser and go to the URL provided by the command to view the site.

These methods will serve your site locally, which is useful for development and testing purposes.

## Starting the Server

This project uses Node.js and Express, serving static files from the project root directory (`__dirname`) and requires configuration via `dotenv`. To get started:

1. Install the dependencies using npm:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. By default, the server runs on [http://localhost:3000](http://localhost:3000), where the `index.html` file will be displayed.

### Environment Configuration
Ensure you have a `.env` file at the root of your project with the following content:
```
USER_NAME=your_username_here
```

### API Endpoint

The server handles the following:
- **Static Files**: All static files are served from the project root directory.
- **API Endpoint**: `GET /api/user`: Retrieves information about the user specified in the `USER_NAME` environment variable.

## QA for Tab Bar

### Local Preview
To perform a QA review, start by serving the application locally using one of the methods outlined above.

### Tab Bar Color Scheme
The primary theme/background color is yellow (#FFFF00). The tab text in the tab bar is light gray (#B0B0B0) across default, hover/focus, and active states.

### Visual Checks
- Verify the tab bar is visually aligned according to design specifications in both light and dark modes.

### QA Steps for Light/Dark Themes
- Verify the visual presentation and that the tab bar retains the light gray tab text color (#B0B0B0) in both light and dark themes.
- Confirm the app's primary theme accents use purple (#800080) consistently.
- For dark mode, change the theme in localStorage with: `localStorage.setItem('theme', 'dark')` and refresh the page to ensure all components appear correctly in dark mode.

### Dark Mode Testing (Deprecated)
- Test the tab bar in dark mode by setting the theme in localStorage: `localStorage.setItem('theme', 'dark')`.
- Refresh the page to ensure the tab bar and all components update to dark mode correctly.

### Keyboard Accessibility
- Ensure that the tab bar is fully navigable using keyboard inputs. Verify that tabbing through options and activating them via the keyboard works as expected.

### CSS/JS Contract Integrity Checklist
- Ensure the CSS classes and IDs tied to the tab bar are consistent and match the design contract.
- Verify JavaScript logic handles state changes and events consistently with specifications. 
- Check for any console errors or warnings when interacting with the tab bar.

Make sure to update any references or styles using this color to match the theme guidelines.
