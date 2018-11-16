import { Container } from 'unstated'
import data from '../data/cards.json'
// import localForage from 'localforage'

// window = window || {}

export default class CYOAContainer extends Container {
  state = {
    cardsPicked: [],
    stages: 0
  }

  constructor ({ stages, cardsPicked = [] } = {}) {
    super()
    this.state.stages = stages || Object.keys(data).length
  }

  has = (title) => this.state.cardsPicked.map(x => x.title).includes(title)
  hydrate = ({ cardsPicked = [] }) => this.setState({ cardsPicked })
  addCard = card => this.setState(state => ({ cardsPicked: [...state.cardsPicked, card] }))
  removeCard = ({ title }) => this.setState(state => ({ cardsPicked: state.cardsPicked.filter(c => c.title !== title) }))
  removeCards = (titles) => this.setState(state => ({ cardsPicked: state.cardsPicked.filter(c => (!titles.includes(c.title))) }))
}
