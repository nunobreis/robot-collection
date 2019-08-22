import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import * as robotsActions from '../redux/actions'

import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

class App extends React.Component {
  componentDidMount() {
   this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robots =>
      robots.name.toLowerCase().includes(searchField.toLowerCase()),
    )
    if (isPending) {
      return <h1 className="tc">Loading...</h1>
    }

    return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox
          searchChange={onSearchChange}
          searchField={searchField}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

const mapStateToProps = ({ searchRobots, requestRobots }) => ({
  searchField: searchRobots.searchField,
  robots: requestRobots.robots,
  isPendig: requestRobots.isPendig,
  error: requestRobots.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(
    robotsActions.setSearchField(e.target.value)
  ),
  onRequestRobots: () => robotsActions.requestRobots(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
