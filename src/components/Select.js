import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getServerData } from '../helper/helper'
import { setNameOfMCQ } from '../redux/result_reducer'
import { setIDOFMCQ } from '../redux/temp_reducer'


export default function Select() {

    const [go, setGo] = useState(0)
    const [serverData, setServerData] = useState([]);
    const dispatch = useDispatch();
    // const IDOFMCQ = useSelector(state => state.temp.IDOFMCQ)  
          
        useEffect(() => {
          const fetchData = async () => {
            try {
              const data = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`);
              setServerData(data);
              console.log(serverData.length)
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
        }, []);
        
        function onNewClick() {
            console.log("click new quiz")
            setGo(2);
        }
    
        if(go === 1) {
            return <Navigate to={{ pathname: '/quiz'}} replace={true}></Navigate>
        }

        if(go === 2) {
          return <Navigate to={{ pathname: '/generate'}} replace={true}></Navigate>
        }

        const handleQuestionClick = (item) => {
            dispatch(setIDOFMCQ(item))
            console.log(item)
            // console.log(IDOFMCQ)
            setGo(1)
          };

    return(
        <div className="container">
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='start'>
                <button className='btn' onClick={onNewClick}>Start New Quiz</button>
            </div>

            {/* <div className='start'>
                <Link className='btn' to={'quiz'} onClick={console.log("click")}>Start Old Quiz</Link>
            </div> */}

    <h1>List of Questions</h1>

        <ol>
          {serverData.map((item) => (
            <li key={item._id}>
              <a href="#" onClick={() => handleQuestionClick(item)}>{item.nameOfMCQ}</a>
            </li>
          ))}
        </ol>

        </div>
    )
}