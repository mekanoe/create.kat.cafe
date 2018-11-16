import { Component } from 'react'
import CYOAPage from '../components/CYOAPage'
import { bodyType } from '../data/cards.json'

export default class BodyType extends Component {
  render = () => (
    <CYOAPage
      title='Body Type'
      layoutClassName=''
      nextPage='/breed'
      stage={1}
      cards={bodyType}
    >
      <h1 className='f3'>Body Type</h1>
      <p className='tj'>
        Catgirls come in all shapes and sizes, they're not all skinny waifs.
        With the new formula, we're able to give you almost total control of your
        physique, helping you and all other catgirls look their best.
      </p>
    </CYOAPage>
  )
}
