import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({Component, pageProps}) {
    return <>
        <Header/>
        <Component {...pageProps} />
        <style jsx global>
            {
                `
                  body {
                    margin: 0;
                  }
                `
            }
        </style>
    </>
}

export default MyApp
