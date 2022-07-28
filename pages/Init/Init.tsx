import React, { useState, useEffect } from 'react';
import {
    AppShell,
    Navbar,
    Footer,
    Aside,
    Text,
    useMantineTheme,
    Center,
    Grid,
    Container
} from '@mantine/core'
import NavigationBar from '../../components/App/Navbar/Navbar';
import InitMap from '../../components/App/Maps/InitMap';
import InitStock from '../../components/App/Charts/InitStock';
import InitPie from '../../components/App/Charts/InitPie';
import InitMeter from '../../components/App/MetersCards/InitMeter';
import GTIMEHeader from '../../components/App/Header/GTIMEHeader';
import { useUser } from '@auth0/nextjs-auth0';

export default function HomePage() {
    const [gtimeData, setGTIMEData] = useState([]);
    const [gtimeCardData, setGTIMECardData] = useState([]);
    const { user, error, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        if (user) {
            fetch(`/api/gtimeInfo?ownerId=${user['https://app.gtime.io/userdata'].ownerId}`)
                .then((res) => res.json())
                .then((resdata) => {
                    setGTIMEData(resdata.response);
                    resdata.response.forEach(infoData => {
                        setGTIMECardData(prevData => [new Set([...prevData, <Grid.Col span={4}>
                            <InitMeter
                                title={infoData.mainName}
                                description={infoData.description}
                                status={infoData.active}
                                imgSrc={infoData.imageSource}
                            />
                        </Grid.Col>])]);
                    })
                })
        }
    }, [])
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
        header={<GTIMEHeader />
        }
    >
        <Center>
            <InitMap data={gtimeData}></InitMap>
        </Center>
        <Center>
            <Grid grow gutter="xs">
                <Grid.Col span={4}>
                    <Center>
                        <div ><InitStock ownerId={user['https://app.gtime.io/userdata'].ownerId} /></div>
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}><div style={{ height: 500 }}>
                    <InitPie ownerId={user['https://app.gtime.io/userdata'].ownerId} />
                </div></Grid.Col>
                {gtimeCardData}
            </Grid>
        </Center>
    </AppShell>)
}
