import React, {PropTypes} from 'react'
import './ProjectType.scss'
import PanelProject from '../PanelProject/PanelProject'

const deviceMap = {
  phone: <div key="IPHONE" className="icon icon-iphone">Phone</div>,
  tablet: <div key="IPAD" className="icon icon-ipad">Tablet</div>,
  desktop: <div key="WEB" className="icon icon-web">Desktop</div>,
  'apple-watch': <div key="APPLE_WATCH" className="icon icon-apple-watch"> Apple Watch</div>,
  'android-watch': <div  key="ANDROID_WEAR" className="icon icon-android-wear">Android Watch</div>
}

/*eslint-disable camelcase */
const typeMap = {
  app_dev: 'Design & Development Project',
  generic: 'Work Project',
  visual_design: 'Visual Design Project',
  visual_prototype: 'Visual Prototype Project'
}
/*eslint-enable camelcase */
const ProjectType = ({type, devices}) => (
  <PanelProject>
    <PanelProject.Heading>
      {typeMap[type]}
    </PanelProject.Heading>
    <div className="project-icons">
      <div className="icon-set">
        {devices.slice(0, 3).map((device) => deviceMap[device])}
      </div>
      {devices.length > 3 && <div className="icon-set">
        {devices.slice(3).map((device) => deviceMap[device])}
      </div>}
    </div>
  </PanelProject>
)

ProjectType.propTypes = {
  type: PropTypes.string.isRequired,
  devices: PropTypes.arrayOf(PropTypes.oneOf(['phone', 'tablet', 'desktop', 'apple-watch', 'android-watch'])).isRequired
}

ProjectType.defaultProps = {
  devices: []
}

export default ProjectType
