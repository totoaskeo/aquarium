import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import actionCreators from '../store/actions'
import './Aquarium.css'

class Aquarium extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputArray: this.props.inputArray
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
  }

  render () {
    return (
      <>
        <Table className="mt-5" bordered>
          <tbody>
            {
              this.props.inputArray.map((ia, i) =>
                <tr key={i}>
                  {
                    ia.map((a, j) =>
                      <td className={'p-4 ' + a} key={j}></td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </Table>
      </>
    )
  }
}

export default connect(
  state => ({ inputArray: state.inputArray }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Aquarium)
