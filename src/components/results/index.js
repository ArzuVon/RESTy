import React from 'react'
import './results.scss'

function Results(props) {

  return (
    <div className='container'>
      <section className='form-section'>
        <pre>
          <h4>
            {props.data ? JSON.stringify(props.data, undefined, 2) : "Please enter an API in the box, select a request method then hit Go!"}
          </h4>
        </pre>
      </section>
    </div>
  )
}

export default Results;