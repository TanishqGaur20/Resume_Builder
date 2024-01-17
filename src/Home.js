import React from 'react'
import resumeimg from './Images/resume.png'
const Home = () => {
    function scrollDown() {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
    }
    return (
        <div className='HomeFull'>
            <div className='homeleft'>
                <h1>The Ultimate Resume Builder</h1>
                <h5>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</h5>
                <button className='btn btn-primary buildREsumebtn' onClick={scrollDown}>Build Your Resume</button>
            </div>
            <div className='HomeRight'>
                {/* <div className='ImgDivResume'> */}
                <img src={resumeimg} alt="" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home