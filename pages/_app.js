import './bootstrap/css/bootstrap.css'
import '../styles/globals.css'
import Layout from './components/layout'

import '@popperjs/core';

function MyApp({ Component, pageProps }) {
    return  (
            <Layout>
                <Component {...pageProps} />
            </Layout>
            )
    }

export default MyApp
