import App, { Container } from 'next/app'
import { Provider } from 'unstated'
import { Persist } from 'react-persist'
import CYOAContainer from '../containers/CYOAContainer'

const cyoa = new CYOAContainer()

class CreateApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Persist name='cards-picked' data={cyoa.state.cardsPicked} debounce={250} onMount={cardsPicked => cyoa.hydrate({ cardsPicked })} />
        <Provider inject={[cyoa]}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default CreateApp
