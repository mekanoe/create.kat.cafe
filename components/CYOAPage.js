import { Component } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Head from 'next/head'
import Link from 'next/link'
import CYOAContainer from '../containers/CYOAContainer'
import { Subscribe } from 'unstated'
import data from '../data/cards.json'

const dataLength = Object.keys(data).length

export default class CYOAPage extends Component {
  nyaOrNot ({ state: { cardsPicked } }, regular) {
    if (cardsPicked.filter(x => x.title === 'Nyaa!').length !== 0) {
      return 'Nyaa!~'
    } else {
      return regular
    }
  }

  onCardClick = (cyoa, d) => async () => {
    const pageCards = this.props.cards.map(x => x.title)
    const isSelected = cyoa.has(d.title)
    await cyoa.removeCards(pageCards)

    if (isSelected) {
      return
    }

    await cyoa.addCard(d)

    console.log('card clicked ==>', d.title)
    console.log('new cyoa ==>', cyoa.state.cardsPicked)
  }

  getCardStates (cyoa) {
    const pageCards = this.props.cards.map(x => x.title)
    const selectedCards = cyoa.state.cardsPicked.map(x => x.title)
    let pageHasSelected = false

    for (let c of selectedCards) {
      pageHasSelected = pageCards.includes(c)
      if (pageHasSelected) break
    }

    const states = pageCards.reduce((acc, title) => {
      acc[title] = {
        isSelected: cyoa.has(title),
        isUnselected: !cyoa.has(title) && pageHasSelected
      }
      return acc
    }, { pageHasSelected })

    // console.log({ states, pageCards, selectedCards })
    return states
  }

  cardClassName ({ isSelected, isUnselected }) {
    if (isSelected) {
      return 'b--green bg-washed-green'
    } else if (isUnselected) {
      return 'unselected'
    }

    return ''
  }

  stageColor (i) {
    const { stage } = this.props
    if (i === stage - 1) {
      return 'bg-light-blue'
    } else if (i < stage) {
      return 'bg-light-green'
    } else {
      return 'bg-gray'
    }
  }

  render = () => (
    <Layout style={{ '--bg-hr': `${(this.props.stage / dataLength) * 360}deg` }} className={`flex items-center content-center mv3 ${this.props.layoutClassName}`}>
      <Head>
        <title key='title'>Catgirl Creation: {this.props.title}</title>
      </Head>
      <section className='mw7 pa3-l pa1 center near-black tc lh-copy bg-cr-light ba b--light-silver br2'>
        <Subscribe to={[CYOAContainer]}>{ cyoa => {
          const states = this.getCardStates(cyoa)
          console.log(states)
          return <>
            <div className='flex center items-center justify-center'>
              {[...'a'.repeat(cyoa.state.stages)].map((_, i) => <div key={i} style={{ width: 10, height: 10, margin: '0 2px' }} className={`br-100 ${this.stageColor(i)}`} />)}
            </div>
            {this.props.children}
            <div className='pa2-l flex flex-wrap'>
              {this.props.cards.map((d, i) => <Card data={d} key={i} className={`w-100 w-50-m w-33-l mv1 ${this.cardClassName(states[d.title])}`} onClick={this.onCardClick(cyoa, d)} />)}
            </div>
            <p>
              <Link href={this.props.nextPage} preload>
                <a className={`f6 link dim br1 ph3 pv2 mb2 near-white bg-near-black pointer ${!states.pageHasSelected ? 'dn' : 'dib'}`}>{this.nyaOrNot(cyoa, 'Continue')} ►</a>
              </Link>
            </p>
        </>
        }}</Subscribe>
      </section>
    </Layout>
  )
}
