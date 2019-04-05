import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../datas/tourData';

export default class TourList extends Component {
 
    state = {
        tours: tourData
    }

    removeTOur = id => {
        const {tours} = this.state;
        const filteredTours = tours.filter(tour => tour.id !== id);
        this.setState({
           tours:filteredTours
        });
    }

  render() {
      
    const { tours } = this.state;
    return (
      <div>
         <section className="tourlist">
            {tours.map( tour => {
                return (
                    <Tour  
                          key={tour.id} 
                          tour={tour}
                          removeTOur={this.removeTOur}
                    />
                )
            }) }
         </section>
      </div>
    )
  }
}
