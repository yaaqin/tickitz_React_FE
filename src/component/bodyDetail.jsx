import React from 'react'

import "../style/bodyDetail.css";


function BodyDetail() {
  return (
    <>
         <section id='detailBody' className='mt-5'>
           <div className='row'>
                <div className='col-md-4 col-xs-12 d-flex justify-content-center'>
                    <div className='imgPoster'>
                        <div className='imgFilm'></div>
                    </div>
                </div>
                <div className='col-md-8 col-xs-12 poster2'>
                    <h1>spiderman</h1>
                    <h4>genres</h4>

                    <div className='row mt-4'>
                        <div className='col-md-4 col-xs-12'>
                            <h6 className='text-muted'>Release date</h6>
                            <h6>Juni</h6>
                            <h6 className='mt-4 text-muted'>Duration</h6>
                            <h6>1 hour</h6>
                        </div>
                        <div className='col-md-8 col-xs-12'>
                            <h6 className='text-muted'>Directed by</h6>
                            <h6>Juni</h6>
                            <h6 className='mt-4 text-muted'>Cast</h6>
                            <h6>1 hour</h6>
                        </div>

                        <hr className='mt-4 mb-4'/>

                        <h4>Synopsis</h4>
                        <span>ceritanya disini</span>
                    </div>
                </div>
           </div>
        </section>
    </>
  )
}

export default BodyDetail;