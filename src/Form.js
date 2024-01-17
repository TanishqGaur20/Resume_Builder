import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [PageNo, setPageNo] = useState(1)
    const navigate = useNavigate();
    function ResumePage() {
        navigate('/resume', { state: { data: formData } })
    }
    const [formData, setFormData] = useState({
        firstName: '',
        Phone: '',
        email: '',
        Address: '',
        cityCode: '',
        city: '',
        education: "",
        university: '',
        Collegecity: '',
        startmonth: '',
        startyear: '',
        endmonth: '',
        endyear: '',
        description: '',
    });
    const currentyear = new Date().getFullYear();
    const YearArray = Array.from({ length: currentyear - 1950 }, (_, index) => 1950 + index)
    const [image, setImage] = useState(null);

    const [Skills, setSkills] = useState([{ data: '', range: '' }])

    function AddSkill() {
        let skillArray = [...Skills, []]
        setSkills(skillArray)
        // console.log(Skills.length);
    }
    function RemoveSkill(i) {
        let array = Skills.filter((data, index) => index !== i)
        setSkills(array)
    }
    const HandleInputSKills = (e, i) => {
        let array = [...Skills];
        array[i].data = e.target.value;
        setSkills(array);
    }
    const HandleRange = (e, i) => {
        let array = [...Skills]
        array[i].range = e.target.value;
        setSkills(array);
    }



    // Function to handle form input className='form-control' changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log("Form submitted", formData);
    };
    useEffect(() => {
        const updatedData = {
            ...formData,
            skills: Skills
        }
        setFormData(updatedData);

    }, [Skills])

    useEffect(() => {
        const updatedData = {
            ...formData, image: image
        }
        setFormData(updatedData)
    }, [image])

    const handleNext = () => {
        if (PageNo == 1 || PageNo === 2) {
            setPageNo(PageNo + 1)
        }
        if (PageNo === 3) {
            setPageNo(1)
        }
    }
    const handlePrev = () => {
        if (PageNo == 2 || PageNo === 3) {
            setPageNo(PageNo - 1)
        }
        if (PageNo === 1) {
            setPageNo(3)
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file)
    };
    return (
        <form >
            <div className='FormInnerDiv'>
                {
                    PageNo === 1 ? <>
                        <h1>Personal Details</h1>
                        <div className='fieldsDiv'>
                            <label>Name : </label>
                            <input className='form-control' type="text" value={formData.firstName} name='firstName' placeholder='Enter you name' onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div className='fieldsDiv'>
                            <label >Upload Image</label>
                            <input className='form-control' type="file" onChange={handleImageChange} />
                        </div>

                        <div className='fieldsDiv'>
                            <label>Phone Number : </label>
                            <input className='form-control' type="number" value={formData.Phone} name='Phone' placeholder='Phone Number' onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className='fieldsDiv'>
                            <label>Email : </label>
                            <input className='form-control' type="email" value={formData.email} name='email' placeholder='Email-Address' onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className='fieldsDiv'>
                            <label>Address : </label>
                            <input className='form-control' type="text" value={formData.Address} name='Address' placeholder='Enter Address' onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className='fieldsDiv'>
                            <label>City-Code : </label>
                            <input className='form-control' type="number" value={formData.cityCode} name='cityCode' placeholder='Enter City-Code' onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className='fieldsDiv'>
                            <label>City : </label>
                            <input className='form-control' type="text" value={formData.city} name='city' placeholder='Enter you City' onChange={(e) => handleInputChange(e)} />
                        </div>
                    </> : (PageNo === 2 ? <>

                        <h1>Skills</h1>

                        <div className='OuterSkillDiv'>
                            {Skills.map((data, index) => (
                                <div key={index} className='fieldsDivSkill'>
                                    <label>Skill {index + 1} : </label>
                                    <input type="text" className='SkillInput form-control' onChange={(e) => { HandleInputSKills(e, index) }} name='Skills' placeholder='Enter skills' />
                                    <button style={{ border: 'none', width: '20vw', marginTop: '5px', marginBottom: '5px', borderRadius: '5px' }} onClick={() => RemoveSkill(index)}>Remove</button>
                                    <input className='SkillInput form-control' onChange={(e) => { HandleRange(e, index) }} type="range" />
                                    <label >{Skills[index].range} %</label>
                                </div>
                            ))}
                        </div>
                        <button type='button' className=' btn btn-primary' onClick={AddSkill}>Add Skill</button>


                    </> :
                        <>
                            <h1>Education Details</h1>
                            <div className='fieldsDivDesc'>
                                <label >Education</label>
                                <input className='form-control' type="text" name='education' value={formData.education} onChange={(e) => { handleInputChange(e) }} placeholder='Education' />
                                <label >University</label>
                                <input className='form-control' type="text" placeholder='University' value={formData.university} name='university' onChange={(e) => { handleInputChange(e) }} />
                                <label >City</label>
                                <input className='form-control' type="text" placeholder='City' value={formData.Collegecity} name='Collegecity' onChange={(e) => { handleInputChange(e) }} />
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <label >Start Date</label>
                                    <label htmlFor="">End Date</label>
                                </div>
                                <div>
                                    <select className='me-2' value={formData.startmonth} name='startmonth' onChange={(e) => { handleInputChange(e) }}>
                                        <option value="">-- Select Month --</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <select className='me-3' value={formData.startyear} name='startyear' onChange={(e) => { handleInputChange(e) }}>
                                        <option value="">-- Select Year --</option>
                                        {
                                            YearArray.map((data, index) =>
                                                <option value={data}>{data}</option>
                                            )
                                        }
                                    </select>
                                    <select className='me-2' value={formData.endmonth} name='endmonth' onChange={(e) => { handleInputChange(e) }}>
                                        <option value="">-- Select Month --</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <select className='me-3' value={formData.endyear} name='endyear' onChange={(e) => { handleInputChange(e) }}>
                                        <option value="">-- Select Year --</option>
                                        {
                                            YearArray.map((data, index) =>
                                                <option value={data}>{data}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <label htmlFor="">Description</label>
                                <textarea id="" placeholder='Description ....' value={formData.description} name='description' onChange={(e) => { handleInputChange(e) }} cols="30" rows="7"></textarea>

                            </div>
                        </>)
                }
            </div>
            <div className='OuterButtonsPrevNext'>
                <div className='ButtonsPrevNext'>
                    <button className='ms-2 btn btn-primary' type='button' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></button>
                    <button type='button' className='ms-2 btn btn-primary' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className='btnLast'>
                <button className='ms-2 btn btn-primary' type="submit" onClick={handleSubmit}>Submit</button>
                <button className='ms-2 btn btn-primary' onClick={ResumePage}>Resume</button>
            </div>
        </form >



    );
};

export default Form;


