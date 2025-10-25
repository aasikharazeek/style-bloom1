// pages/_app.js
import GlobalState from '../context/GlobalState';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <GlobalState>
      <Header />
      <main className="page">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Style Bloom</div>
      </footer>
    </GlobalState>
  );
}
