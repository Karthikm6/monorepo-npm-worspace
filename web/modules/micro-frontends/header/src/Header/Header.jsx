import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { StyleLoader, Button } from "@fstr/components";

const Header = () => {
  const [data, setData] = useState();
  //add post
  const fetchData = async () => {
    const url = 'http://localhost:4502/graphql/execute.json/monorepo-demo/headerEndPoint';
    const username = 'admin';
    const password = 'admin';
    const resData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      }
    });
    const jsonData = await resData?.json();
    await setData(jsonData?.data?.monorepoDemoList?.items?.[0]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StyleLoader />
      <header className='flex middle between px-5 py-4 gap-5 w-75 m-auto border-box'>
        <div className='logo'>
          <img src={data?.logo?._authorUrl} alt='' className='w-100' />
        </div>
        <div className='menu flex middle gap-15'>
          <ul className='flex middle gap-15'>
            {
              data?.headermenu?.map((item, ind) => (
                <li key={`headerMenu${ind}`}>{item}</li>
              ))
            }
          </ul>
          <Button className='btn primary-bg px-10 py-4 white-color r-2' text={data?.buttonLabel} />
        </div>
      </header>
    </>
  )
}

export default Header
