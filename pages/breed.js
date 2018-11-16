import { Component } from 'react'
import CYOAPage from '../components/CYOAPage'
import { breed } from '../data/cards.json'

export default class Breed extends Component {
  render = () => (
    <CYOAPage
      title='Breed'
      layoutClassName=''
      nextPage='/physio'
      stage={2}
      cards={breed}
    >
      <h1 className='f3'>Breed</h1>
      <p className='tj'>
        We used to think there was only one kind of catgirl, but with new developments,
        we've found there's actually about six different breeds. They're all named after
        the most common hair color in the group, but they're defined by their differing
        personalities. You're still an individual, of course. You'll still be you, but the
        breed you choose will lead you in a certain direction, and it will affect how people
        think of you.
      </p>
    </CYOAPage>
  )
}
