import 'bootstrap/dist/css/bootstrap.min.css'; 
// Desta forma incluimos o css/bootstrap de forma global

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }