import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="total-container" data-testid="planets">
        <h1>Planets</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
