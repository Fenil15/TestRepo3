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