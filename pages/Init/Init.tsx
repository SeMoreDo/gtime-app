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
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import SectionSiemens from '../../components/SectionSiemens/SectionSiemens';
import SectionFour from '../../components/SectionFour/SectionFour';
import SectionFive from '../../components/SectionCentrals/SectionCentrals';
import SectionChart from '../../components/SectionChart/SectionChart';
import SectionMap from '../../components/SectionMap/SectionMap';
import SectionEq from '../../components/SectionEq/SectionEq';
import SectionFooter from '../../components/SectionFooter/SectionFooter';
import { UserProfile, UserProvider, useUser } from '@auth0/nextjs-auth0';
import InitMeter from '../../components/App/MetersCards/InitMeter';
let mockData = [
    {
        "title": "ALENA-MAR-2022",
        "place": "Parque eólico Alena",
        "periodo": '03-2022',
        "energy": 22.08,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-04-2022 00:00:00',
            "filePath": "AL_MAR_22.pdf"
        },
        "key": "AL"
    },
    {
        "title": "ALENA-ABR-2022",
        "place": "Parque eólico Alena",
        "periodo": '04-2022',
        "energy": 20.45,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-05-2022 00:00:00',
            "filePath": 'AL_ABR_22.pdf'
        },
        "key": "AL"
    },
    {
        "title": "ALENA-MAY-2022",
        "place": "Parque eólico Alena",
        "periodo": '05-2022',
        "energy": 18.83,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-06-2022 00:00:00',
            "filePath": 'AL_MAY_22.pdf'
        },
        "key": "AL"
    },
    {
        "title": "Granja Solar-MAR-2022",
        "place": "Parque Granja Solar",
        "periodo": '03-2022',
        "energy": 405.66,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-04-2022 00:00:00',
            "filePath": 'GS_MAR_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Granja Solar-ABR-2022",
        "place": "Parque Granja Solar",
        "periodo": '04-2022',
        "energy": 379.23,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-05-2022 00:00:00',
            "filePath": 'GS_ABR_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Granja Solar-MAY-2022",
        "place": "Parque Granja Solar",
        "periodo": '05-2022',
        "energy": 410.59,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-06-2022 00:00:00',
            "filePath": 'GS_MAY_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Río Escondido-MAR-2022",
        "place": "Parque Solar Río Escondido",
        "periodo": '03-2022',
        "energy": 516.28,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-04-2022 00:00:00',
            "filePath": 'RE_81d89ac24a6f76f2fc0e27dcb83a4df9b4a33232b79b9aa7c20dca8ab97177eb_MAR_22.pdf'
        },
        "key": "RE"
    },
    {
        "title": "Río Escondido-ABR-2022",
        "place": "Parque Solar Río Escondido",
        "periodo": '04-2022',
        "energy": 542.33,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-05-2022 00:00:00',
            "filePath": 'RE_8628767f4b68a1678088cf998772c249dba1f8c8eca5a54425cca788d7b4a2f2_ABR_22.pdf'
        },
        "key": "RE"
    },
    {
        "title": "Río Escondido-MAY-2022",
        "place": "Parque Solar Río Escondido",
        "periodo": '05-2022',
        "energy": 596.64,
        "unit": 'MWh',
        "certFile": {
            "generated": '01-06-2022 00:00:00',
            "filePath": 'RE_f6e3810937347a6d613b3c3576ae11c7ef56fad85a977a657f3c7d18dec6c330_MAY_22.pdf'
        },
        "key": "RE"
    }
]
type Row = {
    [key: string]: any;
}
type CardElement = React.ReactElement[]
export default function HomePage(props) {
    const [gtimeData, setGTIMEData] = useState([]);
    const [gtimeCardData, setGTIMECardData] = useState<any[]>([]);
    const [gtimeUser, setGTIMEUser] = useState<UserProfile>();//@ts-ignore: Type 'undefined' is not assignable to type 'string'.
    const { user, error, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        try {
            if (1!) {// @ts-ignore: Object is of type 'unknown'.
                console.log(user);
                setGTIMEUser(user);
                // fetch(`/api/gtimeInfo?ownerId=${user['https://app.gtime.io/userdata'].ownerId!}`)// @ts-ignore: Object is of type 'unknown'.
                //     .then((res) => res.json())
                //     .then((resdata) => {
                //         setGTIMEData(resdata.response);
                //         resdata.response.forEach((infoData: Row) => {
                //             setGTIMECardData((prevData: Array<React.ReactElement[]>) => {
                //                 return Array.from(new Set([...prevData, <Grid.Col span={4}>
                //                     <InitMeter
                //                         title={infoData.mainName}
                //                         description={infoData.description}
                //                         status={infoData.active}
                //                         imgSrc={infoData.imageSource} />
                //                 </Grid.Col>]));
                //             });
                //         })
                //     })
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e)
            }
        }
    }, [])
    return (
        <UserProvider>
            <SectionOne />
            <SectionTwo title={'Trazabilidad energética'} description={'Conoce el origen de la energía'} image={'https://www.phinet.cl/wp-content/uploads/2022/09/head-image.jpg'} action={{ link: '' }} style={{ height: 600 }} className={''}/>
            <SectionSiemens></SectionSiemens>
            <SectionFour data={mockData}></SectionFour>
            <SectionFive data ={mockData}></SectionFive>
            <SectionChart {...props}></SectionChart>
            <SectionEq data ={mockData}></SectionEq>
            <SectionMap data ={mockData}></SectionMap>
            <SectionFooter data ={mockData}></SectionFooter>

        </UserProvider>
    )
}
