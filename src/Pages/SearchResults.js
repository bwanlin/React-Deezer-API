import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAlbumsFromArtist } from '../redux/actions/AlbumsAction'
import Header from '../components/Header'
import ShowSingleAlbum from '../components/ShowSingleAlbum'
import { Spin, Button } from 'antd'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { match, dispatch } = this.props
    dispatch(getAlbumsFromArtist(match.params.name))
  }
  render() {
    const { loading, data, match, history } = this.props
    if (loading) {
      return (
        <div className="container-loading">
            <div style={{ textAlign: 'center' }}>
              <h1>Fetching data ...</h1>
              <Spin size="large"/>
            </div>
        </div>
      )
    }
    if (!loading && !data) {
      return (
        <div className="container">
          <h3>Une erreur est survenue</h3>
        </div>
      )
    }
    return (
      <div className="container-results">
        {
          (!loading && data.total > 0) ? (
            <Header results={data.total} artist={match.params.name} />
          ) : (<div>0 results</div>)
        }
        {
          (!loading && data.data) ? (
            <div className="album-mosaic">
            {
              data.data.map((item, id) => {
                return (
                  <ShowSingleAlbum
                    cover={item.cover_medium}
                    title={item.title}
                    url={item.link}
                    key={id}
                  />
                )
              })
            }
            </div>
          ) : (null)
        }
      </div>
    )
  }
}

SearchResults.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	data: PropTypes.object
}

function mapStateToProps(state) {
  return {
    loading : state.albums.loading,
    data: state.albums.data,
    errors: state.albums.errors
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const SearchResultsWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

export default withRouter(SearchResultsWrap)
