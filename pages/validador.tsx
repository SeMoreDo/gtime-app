import { useRouter } from 'next/router';
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
import SectionOne from '../components/SectionOne/SectionOne';
import SectionTwo from '../components/SectionTwo/SectionTwo';
import SectionThree from '../components/SectionSiemens/SectionSiemens';
import SectionFour from '../components/SectionFour/SectionFour';
import SectionCentrals from '../components/SectionCentrals/SectionCentrals';
import SectionChart from '../components/SectionChart/SectionChart';
import SectionMap from '../components/SectionMap/SectionMap';
import SectionEq from '../components/SectionEq/SectionEq';
import SectionFooter from '../components/SectionFooter/SectionFooter';
import InitMeter from '../components/App/MetersCards/InitMeter';
import SectionClient from '../components/SectionClient/SectionClient';

let mockData = [
    {
        "title": "ALENA-MAR-2022",
        "place": "Parque eólico Alena",
        "periodo": '03-2022',
        "energy": 22.08,
        "unit": "MWh",
        "certFile": {
            "generated": '01-04-2022 00:00:00',
            "filePath": "AL_6e41ae6080bea3314b9ccd5b6e588cdf4fa617fe0f7625411af86fbad6ba92e7_MAR_22.pdf"
        },
        "key": "AL"
    },
    {
        "title": "ALENA-ABR-2022",
        "place": "Parque eólico Alena",
        "periodo": '04-2022',
        "energy": 20.45,
        "unit": "MWh",
        "certFile": {
            "generated": '01-05-2022 00:00:00',
            "filePath": 'AL_9035fa5135364c8a4f963f98736213cf2cbb2df857346bd6b34ebdf20905b788_ABR_22.pdf'
        },
        "key": "AL"
    },
    {
        "title": "ALENA-MAY-2022",
        "place": "Parque eólico Alena",
        "periodo": '05-2022',
        "energy": 18.83,
        "unit": "MWh",
        "certFile": {
            "generated": '01-06-2022 00:00:00',
            "filePath": 'AL_d298a457da0fb55c9629b7845333a6b0593079619b962a97341810b418de0108_MAY_22.pdf'
        },
        "key": "AL"
    },
    {
        "title": "Granja Solar-MAR-2022",
        "place": "Parque Granja Solar",
        "periodo": '03-2022',
        "energy": 405.66,
        "unit": "MWh",
        "certFile": {
            "generated": '01-04-2022 00:00:00',
            "filePath": 'GS_12b2331928b24407e0c9301cc3f2adf700c96d71882f50ef236385e785bfd226_MAR_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Granja Solar-ABR-2022",
        "place": "Parque Granja Solar",
        "periodo": '04-2022',
        "energy": 379.23,
        "unit": "MWh",
        "certFile": {
            "generated": '01-05-2022 00:00:00',
            "filePath": 'GS_dc0b64a4e6d06dff562575d0f6d74e16ec5a0f212c7e0667368b7e94575af280_ABR_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Granja Solar-MAY-2022",
        "place": "Parque Granja Solar",
        "periodo": '05-2022',
        "energy": 410.59,
        "unit": "MWh",
        "certFile": {
            "generated": '01-06-2022 00:00:00',
            "filePath": 'GS_29610e56924ff64900c9385fec739c4666f85a5693002b5e465c70f496825ba3_MAY_22.pdf'
        },
        "key": "GS"
    },
    {
        "title": "Río Escondido-MAR-2022",
        "place": "Parque Solar Río Escondido",
        "periodo": '03-2022',
        "energy": 516.28,
        "unit": "MWh",
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
        "unit": "MWh",
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
        "unit": "MWh",
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
export default function Validador(props) {
    var router = useRouter();
    var query = router.query;
    const [gtimeData, setGTIMEData] = useState(props.infoGTIME);
    const [gtimeCardData, setGTIMECardData] = useState<any[]>([]);
    const [gtimeUser, setGTIMEUser] = useState<string>();//@ts-ignore: Type 'undefined' is not assignable to type 'string'.
    // const { user, error, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    let totalEnergyResumes = {}
    props.totalCerts.map((cert)=>{
        return totalEnergyResumes[cert.generatorId] = 0
    });
    props.totalCerts.forEach((cert)=>{
        return totalEnergyResumes[cert.generatorId] += cert.energy
    });
    return (
        <>
            <SectionOne />
            <SectionTwo title={'Trazabilidad energética'} description={'Conoce el origen de la energía'} image={'https://www.phinet.cl/wp-content/uploads/2022/09/head-image.jpg'} action={{ link: '' }} style={{ height: 600 }} className={''}/>
            <SectionClient data={gtimeData}></SectionClient>
            {/* <SectionFour data={mockData}></SectionFour> */}
            <SectionCentrals data={{gtimeData, totalEnergyResumes}}></SectionCentrals>
            {/* <SectionChart {...props}></SectionChart> */}
            <SectionEq data={{gtimeData, totalEnergyResumes}}></SectionEq>
            <SectionMap data={gtimeData}></SectionMap>
            <SectionFooter data ={mockData}></SectionFooter>
        </>
    )
}
export async function getServerSideProps(context){
    const _gtime_api = 'https://siemens-energy.gtime.io';
    const certsGTIME = await fetch(`${_gtime_api}/gtime/certificates?dataHash=${context.query.certHash}`).then((res) => res.json());
    const totalCerts = await fetch(`${_gtime_api}/gtime/certificates?certOwner=${certsGTIME.certOwner}`).then((res) => res.json());
    const infoGTIME = await fetch(`${_gtime_api}/gtime/info?hashId=${certsGTIME.certOwner}`).then((res) => res.json());
    return {
      props: {
        certsGTIME: certsGTIME,
        infoGTIME: infoGTIME,
        totalCerts: totalCerts
      }
    };
  };