import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Loader } from '@mantine/core';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
type Props = {
    ownerId: string;
}
type Row = {
    [key: string]: any;
}
export default function InitPie(props: Props) {
    const [pieData, setPieData] = useState<Array<Row>>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`api/gtimeInfo?ownerId=${props.ownerId}`).then((res) => res.json()).then(resGTIMEInfo => {
            fetch(`/api/gtimeSummaries`)
                .then((res) => res.json())
                .then((resdata) => {
                    // console.log(resdata, resGTIMEInfo.response)
                    resGTIMEInfo.response.forEach((row: Row) => {
                        Object.keys(resdata).forEach(prop => {
                            if (row.hashID === prop) {
                                setPieData((prevData: Array<Row>)=> [...prevData, {
                                    "id": row.mainName,
                                    "label": row.mainName,
                                    "value": (resdata[prop] / 1000).toFixed(2),
                                    "color": `hsl(${Math.floor(Math.random() * 256)}, 70%, 50%)`
                                }]);
                            }
                        })
                    });
                    setLoading(false);
                });
        })

    }, []);
    if (isLoading) {
        return (<Loader />)
    }
    return (
        <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 200,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
            layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends']}
        />)

}