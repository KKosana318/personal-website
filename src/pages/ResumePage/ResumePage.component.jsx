import React from 'react';
import IframeResizer from 'iframe-resizer-react'

import Resume from '../../assets/KK Resume.pdf'

import {ResumePageContainer} from './ResumePage.styles'

const ResumePage = () => {
    return (
        <ResumePageContainer>
            <h1>Resume</h1>
            <iframe
              title='Resume'
              src={`${Resume}#view=fit`}
              frameBorder='0'
              style={{ width: '60%', height: '1000px'}}
            />
        </ResumePageContainer>
    )
}

export default ResumePage