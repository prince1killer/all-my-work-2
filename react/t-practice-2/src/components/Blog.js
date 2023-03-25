import React from 'react'

function Blog() {
  return (
    <div id='blog' className='blog'>
      <h1 className='title'>Blog</h1>
      <div className='blog-content'>
        <div className='blog-box1 blog-box'>
          <div className='blog-icon'>
            <i class="fa-brands fa-html5"></i>
          </div>
          <div className='blog-box-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae temporibus, assumenda perspiciatis aliquam minima. Dolorum voluptates, tempore in deleniti soluta</div>
          <button className='blog-box-button buttons'>Read More..</button>
        </div>
        <div className='blog-box1 blog-box'>
          <div className='blog-icon'>
          <i class="fa-brands fa-css3"></i>
          </div>
          <div className='blog-box-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae temporibus, assumenda perspiciatis aliquam minima. Dolorum voluptates, tempore in deleniti soluta</div>
          <button className='blog-box-button buttons'>Read More..</button>
        </div>
        <div className='blog-box1 blog-box'>
          <div className='blog-icon'>
          <i class="fa-brands fa-js"></i>
          </div>
          <div className='blog-box-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae temporibus, assumenda perspiciatis aliquam minima. Dolorum voluptates, tempore in deleniti soluta</div>
          <button className='blog-box-button buttons'>Read More..</button>
        </div>
      </div>
    </div>
  )
}

export default Blog