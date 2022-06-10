import { useUser } from '@auth0/nextjs-auth0';
import Login from '../components/Login/Login';
import NavigationBar from '../components/App/Navbar/Navbar'
import React, { useEffect, useState } from 'react';
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
  Image
} from '@mantine/core';
import { useAppContext } from '../context/AppContext';

export default function HomePage() {
  const { variableState, setVariableState } = useAppContext();
  const { user, error, isLoading } = useUser();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  useEffect(()=>{
    setVariableState(true);
  }, [variableState]);

  if (isLoading) {
    return (
      <div className="text-5xl font-semibold text-center text-indigo-600">
        ...loading{" "}
      </div>
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
        <AppShell
          styles={{
            main: {
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
              <NavigationBar/>
            </Navbar>
          }
          // aside={
          //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          //       <Text>Application sidebar</Text>
          //     </Aside>
          //   </MediaQuery>
          // }
          footer={
            <Footer height={60} p="md">
              {variableState ? <Text>Powered by Phineal</Text> : <Text>Phineal</Text>}
            </Footer>
          }
          header={
            <Header height={70} p="md">
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
             <Burger
               opened={opened}
               onClick={() => setOpened((o) => !o)}
               size="sm"
               color={theme.colors.gray[6]}
               mr="xl"
             />
           </MediaQuery>
                    <Image src='https://gtime.io/wp-content/uploads/2021/04/Logo-portada.png' width={180}
                    ></Image>
            </Header>
          }
        >
           {/* <Text>Resize app to see responsive navbar in action</Text>
          <>
            <Welcome />
            <ColorSchemeToggle />
          </> */}
        </AppShell>
      </Center>
    );
  }
  return (<Login />);
}
