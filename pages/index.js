import React from 'react'
import Link from 'next/link'
// import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
// import { faExclamationTriangle, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'

const Home = () => (
  <Layout className='flex items-center content-center fullheight'>
    <style jsx>{`
      .intro {
        max-width: 960px;
        width: 98vw;
        text-align: center;
      }
      .hat-tip {
        bottom: 2px;
        right: 2px;
        text-align: right;
        opacity: 0.3;
        transition: opacity 0.3s ease-in-out;
      }
      .hat-tip:hover {
        opacity: 0.9;
      }
    `}</style>
    <section className='mw7 pa3 center near-black tc lh-copy bg-cr-light ba b--light-silver br2'>
      <p>
      Welcome to the Species Reassignment Center.<br />
      It's time for you to forget about your old life
      and your plans for the future because that's all over now.
      Our tests have determined that you are unfit to be human
      and so you've been reassigned a new role, one more suited to
      your abilities.
      </p>
      <p className='b'>
      Your opinion on this matter is irrelevant.<br />
      The procedure is mandatory.
      </p>
      <p className='f6'>
        ⚠️ This site has adult content. Please consider your environment before continuing. 🔞
      </p>
      <p>
        <Link href='/body-type' preload>
          <a className='f6 link dim br1 ph3 pv2 mb2 dib near-white bg-near-black'>Continue ►</a>
        </Link>
      </p>
    </section>
    <section className='absolute hat-tip'>
      <a className='link near-black' target='_blank' href='https://www.reddit.com/u/catgirlnya'>Inspired by /u/catgirlnya 💝</a>
    </section>
  </Layout>
)

export default Home
