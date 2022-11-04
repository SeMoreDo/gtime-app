import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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
// import InitPie from '../../components/App/Charts/InitPie';
import InitMeter from '../../components/App/MetersCards/InitMeter';
import GTIMEHeader from '../../components/App/Header/GTIMEHeader';
import { useUser } from '@auth0/nextjs-auth0';

const InitPie = dynamic(() => import("../../components/App/Charts/InitPie"), {
    ssr: false
})
type Row = {
    [key: string]: any;
}
type CardElement = React.ReactElement[]
export default function HomePage() {
    const [gtimeData, setGTIMEData] = useState([]);
    const [gtimeCardData, setGTIMECardData] = useState<any[]>([]);
    const [gtimeUser, setGTIMEUser] = useState<string>();//@ts-ignore: Type 'undefined' is not assignable to type 'string'.
    const { user, error, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        try {
            if (user!) {// @ts-ignore: Object is of type 'unknown'.
                // console.log(user['https://app.gtime.io/userdata'].ownerId!);
                setGTIMEUser(user['https://app.gtime.io/userdata'].ownerId!)//@ts-ignore: Object is of type 'unknown'.
                fetch(`/api/gtimeInfo?ownerId=${user['https://app.gtime.io/userdata'].ownerId!}`)// @ts-ignore: Object is of type 'unknown'.
                    .then((res) => res.json())
                    .then((resdata) => {
                        setGTIMEData(resdata.response);
                        resdata.response.forEach((infoData: Row) => {
                            setGTIMECardData((prevData: Array<React.ReactElement[]>) => {
                                return Array.from(new Set([...prevData, <Grid.Col span={4}>
                                    <InitMeter
                                        title={infoData.mainName}
                                        description={infoData.description}
                                        status={infoData.active}
                                        imgSrc={infoData.imageSource} />
                                </Grid.Col>]));
                            });
                        })
                    })
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e)
            }
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
        <Center key="map">
            <InitMap data={gtimeData} place="" />
        </Center>
        <Center key="stock">
            <Grid grow gutter="xs">
                <Grid.Col span={4}>
                    <Center><InitStock ownerId={gtimeUser!} />
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                    <div style={{ height: 500 }}>
                        <InitPie ownerId={gtimeUser!} />
                    </div>
                </Grid.Col>
                {gtimeCardData}
            </Grid>
        </Center>
    </AppShell>)
}
