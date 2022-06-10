import { Welcome } from '../Welcome/Welcome';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import ButtonLogin from '../Buttons/Buttons';
import React, { useState } from 'react';
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
    Image,
    Stack,
    Grid
} from '@mantine/core';

export default function Login() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (<AppShell
        styles={{
            main: {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        // navbar={
        //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        //     {/* <Text>Application navbar</Text> */}
        //   </Navbar>
        // }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside hidden={!opened} p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //       {/* <Text>Application sidebar</Text> */}
        //     </Aside>
        //   </MediaQuery>
        // }
        footer={
            <Footer height={60} p="md">
                <Text>Powered by Phineal</Text>
            </Footer>
        }
        header={
            <Header height={70} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery> */}


                    <Image src='https://gtime.io/wp-content/uploads/2021/04/Logo-portada.png' width={180}
                    ></Image><ColorSchemeToggle style={{float: 'right'}}/>
                </div>
            </Header>
        }
    >
        {/* <Text>Resize app to see responsive navbar in action</Text> */}
        <>
            <Stack align="center">
                <Welcome />
                <ButtonLogin src="/api/auth/login" />
            </Stack>
        </>
    </AppShell>);
}
