import { useUser } from '@auth0/nextjs-auth0';
import Login from '../components/Login/Login';
import React, { useEffect, useState } from 'react';
import Init from '../pages/Init/Init';
import {
  Center,
  Loader
} from '@mantine/core';

export default function HomePage() {
  const { user, error, isAuthenticated, isLoading } = useUser();
  const [ opened, setOpened ] = useState(false);
  
  // useEffect(() => {
  //   if(isAuthenticated){
  //     login({user})
  //   }
  // }, [user]);

  if (isLoading) {
    return (
      <Center>
        <Loader size="xl" variant="dots" />
      </Center>
    );
  }

  if (error) {
    return (
      <div className="text-5xl font-semibold text-center text-indigo-600">
        {error.message}
      </div>
    )
  }
  if (user) {
    return (
      <Center>
        <Init></Init>
      </Center>
    );
  }
  return (<Login />);
}
