import React, { Component } from 'react';
import './MapComponent.css';

class MapComponent extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div
            className='col-sm-12'
            // style={{ padding:"0px" }}
          >
            <div className='map-mc'>
              <embed src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.8418109044457!2d74.317401485727!3d31.523260746797156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55a85c94e14b0be1!2sIqra%20Steel%20Works!5e0!3m2!1sen!2s!4v1614273283347!5m2!1sen!2s' />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MapComponent;