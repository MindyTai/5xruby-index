import React from 'react'
import Banner from './Banner'
import Content from './Content'

class ContactContent extends React.Component {
  render(){
    return (
      <article>
        <Banner />
        <Content />
      </article>
    )
  }
}

export default ContactContent