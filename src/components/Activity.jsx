import React, { useEffect } from 'react'
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const Activity = () => {

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    const url = `https://aircall-job.herokuapp.com/activities`;
    console.log("##Fetching data from API##");
    axios.get(url, {cancelToken: cancelTokenSource.token})      
    .then(res => console.log(res.data))
    .catch(err =>console.log(err));

    return () => cancelTokenSource.cancel(); 
  }, [])

  return (
    <div>
      Activity body
    </div>
  )
}

export default Activity
