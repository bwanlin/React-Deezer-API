import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button, Icon } from 'antd'

const Header = ({ results, artist, history }) => (
  <div>
    <div className="header">
      <Button onClick={() => history.push('/')}><Icon type="search" />New Search</Button>
      <span style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>{results}</span>
      <span>&nbsp;albums found for&nbsp;</span>
      <span style={{ fontSize: 20, fontWeight: "bold" }}>{artist}</span>
    </div>
  </div>
)

Header.propTypes = {
  history: PropTypes.object.isRequired,
  results: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
}

export default withRouter(Header)
