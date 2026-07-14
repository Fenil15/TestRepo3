# TestRepo3

## How to Run

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

## QA for Tab Bar

### Local Preview
To perform a QA review, start by serving the application locally using one of the methods outlined above.

### Tab Bar Color Scheme
The primary theme color is blue (#1976D2).
The tab text in the tab bar is light gray (#B0B0B0) across default, hover/focus, and active states.

### Visual Checks
- Verify the tab bar is visually aligned according to design specifications in both light and dark modes.

### QA Steps for Light/Dark Themes
- Verify the visual presentation and that the tab bar retains the light gray tab text color (#B0B0B0) in both light and dark themes.
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