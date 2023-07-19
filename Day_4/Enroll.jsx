// import React from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
export default function Enroll() {
    const nav = useNavigate();
    const reviewContainerStyle = {
        marginTop: '50px',
        marginLeft: '350px',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const reviewStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#f7f7f7',
        width: '1000px',
        height: '500px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
    };
    const titleStyle = {
        fontSize: '30px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'center',

    };
const ImgStyle = {

    margin: '20px',
    textAlign: 'center',

};
    return (
        <div style={reviewContainerStyle}>
            <div style={reviewStyle}>
                <h1 style={titleStyle}>COURSE DESCRIPTION</h1>
                <br></br><br></br>
                <p> Become an ace in C++ Programming Language and master the C++ programming skills from basics to advanced. This course is a complete package of videos, notes & contests from basics to STL libraries & algorithms. The perfect C++ course for beginners.</p>
                <br></br>
                <div style={ImgStyle}>
                    <img src="https://banner2.cleanpng.com/20181122/krs/kisspng-java-programming-language-selenium-computer-softwa-july-2-16-halab-4-dev-5bf78387a7bb41.028192901542947719687.jpg" width="250px" height="200px" />
                    <br></br><br></br><br></br>
                        <center>
                            <Button variant="contained" onClick={() => nav('/Checkout')}>ENROLL COURSE</Button>
                        </center>
                </div>
            </div>
        </div>
    )
}