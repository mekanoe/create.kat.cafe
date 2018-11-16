// import { Component } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import CYOAContainer from '../containers/CYOAContainer'
import { Subscribe } from 'unstated'
// import data from '../data/cards.json'

const extractCounts = ({ state: { cardsPicked } }) => {
  console.log({ cardsPicked })
  const combined = cardsPicked.map(x => x.values).join('').split('')
  const split = combined.reduce((acc, x) => { acc[x] = acc[x] + 1 || 1; return acc }, {})
  return {
    ...split,
    count: combined.length
  }
}

const letterToHuman = (letter) => {
  switch (letter) {
    case 'A': return 'Animalistic'
    case 'C': return 'Cuteness'
    case 'S': return 'Submissiveness'
    case 'D': return 'Dominance'
    case 'E': return 'Eroticism'
    case 'H': return 'Humanity'
  }
}

const Final = () => <Layout className={`flex items-center content-center mv3`}>
  <Head>
    <title key='title'>Catgirl Created!</title>
  </Head>
  <section className='mw7 pa3-l pa1 center near-black tc lh-copy bg-cr-light ba b--light-silver br2'>
    <Subscribe to={[CYOAContainer]}>{ cyoa => {
      const counts = extractCounts(cyoa)
      return <>
        <div>
          <h2 className='f4'>Weights</h2>
          { 'ACSDEH'.split('').map(k => (
            <div>
              <span className='b'>{letterToHuman(k)}:</span>{' '}{(Math.floor((counts[k] / counts.count) * 100 || 0))}%{' '}({counts[k] || 0})
            </div>
          )) }
        </div>
        <p>
          <a onClick={async () => { await cyoa.hydrate([]); Router.push('/') }} className={`f6 link dim br1 ph3 pv2 mb2 near-white bg-near-black dib pointer`} title='Reset & Start Over'>{cyoa.has('Nyaa!') ? 'Nyaanya! *purr*' : 'Reset'} ♻️</a>
        </p>
      </>
    }}</Subscribe>
  </section>
</Layout>

export default Final
