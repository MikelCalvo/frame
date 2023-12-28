import React from 'react'
import Restore from 'react-restore'

import DappsPreview from './Preview'
import DappsExpanded from './Expanded'

import OriginExpanded from './OriginExpanded'

class Dapps extends React.Component {
  render() {
    const expandedData = this.props.expandedData || {}
    if (expandedData.originId) {
      return <OriginExpanded {...this.props} />
    } else {
      return this.props.expanded ? <DappsExpanded {...this.props} /> : <DappsPreview {...this.props} />
    }
  }
}

export default Restore.connect(Dapps)