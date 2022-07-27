import React, { useState, useEffect } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  Image,
  Loader,
  RingProgress,
  Grid,
  Container
} from '@mantine/core'
import AppLayout from '../components/App/AppLayout';
import { useAuth } from '../context/GTIMEContext';

export default function Estado() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { userData } = useAuth();
  console.log(userData);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/gtimeInfo?ownerId=${userData.user['https://app.gtime.io/userdata'].ownerId}`)
      .then((res) => res.json())
      .then((resdata) => {
        resdata.response.forEach(infoData => {
          setData(prevData => [new Set([...prevData, <div>{infoData.mainName}</div>])]);
        })
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p><Loader></Loader></p>
  if (!data) return <p>No gtime data</p>
  return (<AppLayout component={data} />)
}
