import React from 'react';
import './Navbar.css';
const styles={
    marginTop : "20px"
}
const styles1={
    marginTop : "0px",
    color: "#0000004D"
}

export const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='one'> 
                <img src="./images/1.svg" />
            </div>
            <div className='two'> 
                <img src="./images/2.svg" style={styles} />
                <p style={styles1}>New</p>
            </div>
            <div className='three'> 
                <img src="./images/3.svg" style={styles}/>
                <p style={styles1}>Patient</p>
            </div>
            <div className='four'> 
                <img src="./images/4.svg" style={styles}/>
                <p style={styles1}>Folder</p>
            </div>
            <div className='five'> 
                <img src="./images/5.svg" style={styles}/>
                <p style={styles1}>Upload</p>
            </div>
            <div className='six'> 
                <img src="./images/6.svg" style={styles}/>
                <p style={styles1}>Report</p>
            </div>
            <div className='seven'> 
                <img src="./images/image 901.svg" style={styles}/>
                <p style={styles1}>Setting</p>
            </div>
            <div className='eight'> 
                <img src="./images/8.svg" style={styles}/>
                <p style={styles1}>Logout</p>
            </div>
        </div>
    </>
    
  )
}
export default Navbar;
