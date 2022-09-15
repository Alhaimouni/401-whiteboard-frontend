import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getData().then((resolve) => {
      setData(resolve);
    });

  },[]);

  async function getData() {
    let url = `${process.env.REACT_APP_SERVER}/post`;
    const axiosRequest = await axios.get(url);
    const datax = axiosRequest.data;
    return datax;

  }

  async function deletePost(id) {
    let url = `${process.env.REACT_APP_SERVER}/post/${id}`;
    await axios.delete(url);
    getData().then((resolve) => {
      setData(resolve);
    });
    
  }

  

  return (
    <>
      <Header />
      <Main data={data} dfunc={deletePost}/>
      <Footer />
    </>
  );
}

export default App;
