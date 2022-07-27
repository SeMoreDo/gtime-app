import React, { useState, useEffect } from 'react';
import {
    AppShell,
    Navbar,
    Footer,
    Aside,
    Text,
    useMantineTheme,
    Center,
    Loader,
    RingProgress,
    Grid,
    Container,
    Select,
    Table
} from '@mantine/core';
import { DownloadIcon } from '@radix-ui/react-icons';
import NavigationBar from '../components/App/Navbar/Navbar';
import InitMap from '../components/App/Maps/InitMap';
import InitStock from '../components/App/Charts/InitStock';
import InitPie from '../components/App/Charts/InitPie';
import InitMeter from '../components/App/MetersCards/InitMeter';
import GTIMEHeader from '../components/App/Header/GTIMEHeader';
import { useUser } from '@auth0/nextjs-auth0';

export default function Validacion() {
    const [filenames] = useState(['AL_6e41ae6080bea3314b9ccd5b6e588cdf4fa617fe0f7625411af86fbad6ba92e7_MAR_22.pdf', 'AL_9035fa5135364c8a4f963f98736213cf2cbb2df857346bd6b34ebdf20905b788_ABR_22.pdf', 'AL_d298a457da0fb55c9629b7845333a6b0593079619b962a97341810b418de0108_MAY_22.pdf', 'GS_12b2331928b24407e0c9301cc3f2adf700c96d71882f50ef236385e785bfd226_MAR_22.pdf', 'GS_29610e56924ff64900c9385fec739c4666f85a5693002b5e465c70f496825ba3_MAY_22.pdf', 'GS_dc0b64a4e6d06dff562575d0f6d74e16ec5a0f212c7e0667368b7e94575af280_ABR_22.pdf', 'RE_81d89ac24a6f76f2fc0e27dcb83a4df9b4a33232b79b9aa7c20dca8ab97177eb_MAR_22.pdf', 'RE_8628767f4b68a1678088cf998772c249dba1f8c8eca5a54425cca788d7b4a2f2_ABR_22.pdf', 'RE_f6e3810937347a6d613b3c3576ae11c7ef56fad85a977a657f3c7d18dec6c330_MAY_22.pdf'])
    const [place, setPlace] = useState(undefined);
    const [gtimeData, setGTIMEData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [selectData, setSelectData] = useState([]);
    const [gtimeCardData, setGTIMECardData] = useState([]);
    const { user, error, isAuthenticated, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    console.log(filenames);
    const handleChange = (value) => {
        console.log(value)
        setTableData([])
        setPlace(value)
        gtimeData.forEach(gtime => {
            filenames.forEach(file => {
                console.log({cme1:file.slice(0,2),cme2: gtime.hashID.slice(0, 2)})
                if(value === gtime.mainName){
                    if (file.slice(0,2) === gtime.hashID.slice(0, 2)) {
                        console.log(file)
                        setTableData(prevData => [new Set([...prevData, <tr key={gtime.subName}>
                            <td>{gtime.mainName}</td>
                            <td>{gtime.hashID}</td>
                            <td>{file.split('_')[2]}</td>
                            <td>{`20${file.split('_')[3].slice(0,2)}`}</td>
                            <td><a href={`/pdf/${file}`} target={'_blank'}><DownloadIcon></DownloadIcon></a></td>
                        </tr>])])
                    }
                }
            })
        })
    }
    useEffect(() => {
        let selectAux = []
        console.log(user);
        if (user['https://app.gtime.io/userdata'] !== undefined) {
            fetch(`/api/gtimeInfo?ownerId=${user['https://app.gtime.io/userdata'].ownerId}`)
                .then((res) => res.json())
                .then((resdata) => {
                    setGTIMEData(resdata.response);
                    resdata.response.forEach((infoData, idx, arr) => {
                        if (infoData.hashID !== infoData.ownerHashId) {
                            selectAux.push(infoData.mainName);
                        }
                        if (resdata.response.length === idx + 1) {
                            setSelectData(selectAux);
                            console.log(selectData, selectAux)
                        }
                        setGTIMECardData(prevData => [new Set([...prevData, <Grid.Col span={4}>
                            <InitMeter
                                title={infoData.mainName}
                                description={infoData.description}
                                status={infoData.active}
                                imgSrc={infoData.imageSource}
                            />
                        </Grid.Col>])]);
                    })
                });
        }
    }, [user])
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
            <GTIMEHeader />
        }
    >
        {/* <Center>
            <InitMap data={gtimeData} place={place}></InitMap>
        </Center> */}
        <Center>
            <Select
                label='Selecciona central para ver sus certificados'
                placeholder='Elige lugar'
                searchable
                nothingFound='No tenemos ese lugar...'
                data={selectData}
                onChange={handleChange} />
        </Center>
        <Center>
            <Center>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Código</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Descarga</th>
                        </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </Table>
            </Center>
            <Grid grow gutter="xs">
                <Grid.Col span={4}>
                    <Center>
                        {/* <div ><InitStock ownerId={user['https://app.gtime.io/userdata'].ownerId}/></div> */}
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}><div style={{ height: 500 }}>
                    {/* <InitPie ownerId={user['https://app.gtime.io/userdata'].ownerId}/> */}
                </div></Grid.Col>

                {/* {gtimeCardData} */}
            </Grid>
        </Center>
    </AppShell>)
}
