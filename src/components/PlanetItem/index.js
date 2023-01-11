import {Component} from 'react'

import './index.css'

class PlanetItem extends Component {
  render() {
    const {planetDetails} = this.props
    const {name, imageUrl, description} = planetDetails

    return (
      <div className="planet-container">
        <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  }
}

export default PlanetItem
