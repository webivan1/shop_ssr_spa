import '../styles/main.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'

// @ts-ignore
import NextNprogress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </Provider>
  )
}