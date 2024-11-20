import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
       
      </nav>
      <div className="content-wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}
