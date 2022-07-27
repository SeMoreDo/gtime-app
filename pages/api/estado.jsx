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
    Center,
    Image,
    Loader,
    RingProgress,
    Grid,
    Container
} from '@mantine/core'
import NavigationBar from '../../components/App/Navbar/Navbar';
import { useAuth } from '../../context/GTIMEContext';

export default function Estado() {

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [data, setData] = useState(undefined)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch('/api/gtime')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [isLoading,data])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (<AppShell
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
                <NavigationBar />
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
                {true ? <Text>Powered by Phineal</Text> : <Text>Phineal</Text>}
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
        <div>
            <p>{data}</p>
        </div>
    </AppShell>)
}
