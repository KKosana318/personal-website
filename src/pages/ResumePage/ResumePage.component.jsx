import React, {useEffect} from 'react';

import {ResumePageContainer} from './ResumePage.styles'

const ResumePage = () => {
    useEffect(() => {
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant"
       });
    }, [])

    return (
        <ResumePageContainer>
            <h1>Resume</h1>

            <embed 
                src="https://drive.google.com/file/d/1zeaSNcsCjvFl0jKzFaRXWbrzDm5BQtK6/preview" 
                frameborder="0" 
                width="60%" 
                height="1000px"
            />
        </ResumePageContainer>
    )
}

export default ResumePage