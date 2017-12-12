import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
const { Meta } = Card

const ShowSingleAlbum = ({ cover, title, url }) => (
  <a href={url}>
    <Card
      hoverable
      style={{ width: 250, margin: '5px 5px' }}
      cover={<img alt="example" src={cover} />}
    >
      <Meta
        title={title}
      />
    </Card>
  </a>
)

ShowSingleAlbum.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}

export default ShowSingleAlbum
