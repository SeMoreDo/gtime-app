import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { Loader } from '@mantine/core';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

export default function InitStock(props) {
    const [stockData, setStockData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [opts, setOpts] = useState();

    useEffect(() => {
        const timezoneOffset = (new Date()).getTimezoneOffset();
        // console.log(timezoneOffset)
        let auxStockData = []
        setLoading(true);
        fetch(`api/gtimeInfo?ownerId=${props.ownerId}`).then((res) => res.json()).then(resGTIMEInfo => {
            resGTIMEInfo.response.forEach((row, index, array) => {
                fetch(`/api/gtimeByIdLatestData?hashID=${row.hashID}`)
                    .then((res) => res.json())
                    .then((resdata) => {
                        resdata.forEach((value, idx, arr) => {
                            auxStockData.push(value);//Offset timezone
                            if (idx + 1 === arr.length) {
                                let data = auxStockData.sort((a, b) => a[0] - b[0])
                                if ((index + 1) === array.length) {
                                    // console.log(data);
                                    setStockData(data);
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
                                            data: [...new Set(data)]
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