import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import userimage from './Images/user.jpg'
import html2pdf from 'html2pdf.js'
const ResumeTemplate = () => {
    const [data, setdata] = useState();
    const location = useLocation();
    const [Colors, setColor] = useState({
        backgroundColor: 'white'
    })
    const [classForColor, setclassForColor] = useState()
    useEffect(() => {
        if (location.state) {
            setdata(location.state.data);
        }
    }, [location.state]);

    const BlueColorObject = {
        backgroundColor: '#4682bf',
    }
    const GreenColorObject = {
        backgroundColor: "rgb(89, 143, 89)",
    }
    const OrangecolorObject = {
        backgroundColor: '#D5A68E',
    }

    useEffect(() => {
        if (Colors.backgroundColor === '#4682bf') {
            setclassForColor('blue')
        }

        else if (Colors.backgroundColor === "rgb(89, 143, 89)") {
            setclassForColor('green')
        }

        else if (Colors.backgroundColor === "#D5A68E") {
            setclassForColor('orange')
        }
        else {
            setclassForColor('black')
        }
    }, [Colors])

    const divref = useRef(null)
    function handlebutton() {
        const element = divref.current;
        if (element) {
            var opt = {
                margin: 1,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', putOnlyUsedFonts: true }
            };
            html2pdf().from(element).set(opt).save();
        }
    }
    console.log(data);
    return (
        <>
            <h1>Resume</h1>
            <h4>Themes</h4>
            <div className='colorbtn'>
                <button className='blues' onClick={() => setColor(BlueColorObject)}></button>
                <button className='oranges' onClick={() => setColor(OrangecolorObject)}></button>
                <button className='greens' onClick={() => setColor(GreenColorObject)}></button>
            </div>

            {data ? (
                <>
                    <div className='Full' style={{ height: "100vh", width: "100vw ", display: 'flex', justifyContent: 'center', alignItems: 'center' }} ref={divref}>
                        <div className='Resume' style={{ height: "100%", width: "40%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
                            <div className='Image_Name' style={Colors}>
                                <div className='Image'>
                                    {data.image ?
                                        <img src={URL.createObjectURL(data.image)} style={{ width: '140px', height: '140px', borderRadius: '70px' }} alt="" />
                                        : <img src={userimage} style={{ width: '140px', height: '140px', borderRadius: '70px' }} />
                                    }
                                </div>
                                <div className='Name'>
                                    <h1>{data.firstName}</h1>
                                    <p><i class="fa-regular fa-address-book"></i>   {data.Phone}</p>
                                    <p><i class="fa-solid fa-location-dot"></i>  {data.Address}</p>
                                    <p><i class="fa-solid fa-city"></i> {data.cityCode} - {data.city}</p>
                                </div>
                            </div>
                            <div className='Second_Third'>

                                <div className="SecondSection">

                                    <div className='Email'>
                                        <label className={classForColor} >Email</label>
                                        <p>{data.email}</p>
                                        <hr />
                                    </div>

                                    <div className='Education'>
                                        <label className={classForColor}>Degree :</label>
                                        <p className='Education_p'>{data.education}</p>
                                        <label className={classForColor} >College :</label>
                                        <p className='Education_p'>{data.university}</p>
                                        <p className='Education_p'>{data.Collegecity}</p>
                                        <p className='Education_p'>{data.startmonth} {data.startyear} - {data.endmonth} {data.endyear}</p>
                                    </div>

                                </div>

                                <div className='ThirdSection'>

                                    <div className='Description'>
                                        <label className={classForColor}>Description</label>
                                        <p className='Description_p'>{data.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='Skill_Last'>
                                <div className='Skills'>
                                    <div className="detail-section pg-skill">
                                        <div className="detail-title">
                                            <div className="title-icon">

                                            </div>
                                            <label className={classForColor}><i className="fas fa-laptop-code"></i> Programming skills</label>
                                        </div>
                                        <div className="detail-content">
                                            <ul className="pg-list">
                                                {data.skills ? data.skills.map((skill, index) => (
                                                    <li key={index}>
                                                        <span>{skill.data}</span>
                                                        <div className="sb-skeleton">
                                                            <div className='skillbar' style={{ backgroundColor: Colors.backgroundColor, '--pgbar-length': `${skill.range}%` }}></div>

                                                        </div>
                                                    </li>
                                                )) : <></>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <NavLink className='btn m-5 btn-primary' to='/'>Home</NavLink>
                    <button className='btn  btn-primary' onClick={handlebutton}>Download Resume</button>
                </>
            ) : (
                <>No data yet</>
            )
            }
        </>
    );
};

export default ResumeTemplate;
