# Overview
Examples of form fields in react, showing:
* Uncontrolled (i.e. DOM) and Controlled (i.e. React) field state management
* Native HTML and React Bootstrap renderings
* use of react-hook-form to build complex forms with sync & async validation and other features

# Build Instructions
```sh
npm install
```

## dev build:
```sh
npm run dev
```
Then open http://localhost:5173

## To run tests:
```sh
npm run test
```

## production build:
```sh
npm run build
cd dist
python3 -m http.server 8080
```
Then open http://localhost:8080
