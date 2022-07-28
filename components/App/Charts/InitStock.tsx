import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { Loader } from '@mantine/core';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}
type Props = {
    ownerId: string;
}
type Row = {
    [key: string]: any;
}
export default function InitStock(props: Props) {
    const [stockData, setStockData] = useState<Array<any>>([]);
    const [isLoading, setLoading] = useState<Boolean>(false);
    const [opts, setOpts] = useState<Object>({});

    useEffect(() => {
        const timezoneOffset = (new Date()).getTimezoneOffset();
        // console.log(timezoneOffset)
        let auxStockData: Array<any> = [] 
        setLoading(true);
        fetch(`api/gtimeInfo?ownerId=${props.ownerId}`).then((res) => res.json()).then(resGTIMEInfo => {
            resGTIMEInfo.response.forEach((row: Row, index: number, array: Array<any>) => {
                fetch(`/api/gtimeByIdLatestData?hashID=${row.hashID}`)
                    .then((res) => res.json())
                    .then((resdata) => {
                        resdata.forEach((value: Array<any>, idx: number, arr: Array<any>) => {
                            console.log(value)
                            auxStockData.push(value);
                            if (idx + 1 === arr.length) {
                                // let data: Array<any> = auxStockData.sort((a, b) => a[0] - b[0])
                                if ((index + 1) === array.length) {
                                    // console.log(data);
                                    setStockData(auxStockData.sort((a, b) => a[0] - b[0]));
                                    setOpts({
                                        chart: {
                                            backgroundColor: {
                                                linearGradient: [0, 0, 100, 500],
                                                stops: [
                                                    [0, 'rgb(155, 255, 255)'],
                                                    [1, 'rgb(10, 200, 255)']
                                                ]
                                            },
                                            type: 'line',
                                        },
                                        title: {
                                            text: 'Energía Trazada'
                                        },
                                        series: [{
                                            data: [...Array.from(new Set(auxStockData.sort((a, b) => a[0] - b[0])))]
                                        }]
                                    })
                                }
                            }
                        });

                    });
            });
            setLoading(false);
        })
    }, []);
    if (isLoading) {
        return (<Loader />)
    }
    return (
        <HighchartsReact highcharts={Highcharts} options={opts} constructorType={'stockChart'} />
    )
}