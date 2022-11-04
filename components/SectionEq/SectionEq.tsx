import { createStyles, Table, Title, Anchor, ScrollArea, Container, Grid, RingProgress, SimpleGrid, Paper, Center, Group, Text, Image } from '@mantine/core';
import InitMeter from '../App/MetersCards/InitMeter';

interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: 'eolic' | 'solar';
  }[];
}
let mockData = {
  "data": [
    {
      "label": "Page views",
      "stats": "456,578",
      "progress": 65,
      "color": "purple",
      "icon": "solar"
    },
    {
      "label": "New users",
      "stats": "2,550",
      "progress": 72,
      "color": "purple",
      "icon": "eolicr"
    },
    {
      "label": "Orders",
      "stats": "4,735",
      "progress": 52,
      "color": "purple",
      "icon": "eolic"
    }
  ]
}
const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: '#641e8c !important',
  }
}));


export default function TableReviews({ data }) {
  const { classes, theme } = useStyles();
  let totalEnergy = 0
  let sizes = [18,90,30]
  if(data.totalEnergyResumes){
    Object.keys(data.totalEnergyResumes).map(generator=>{
      return totalEnergy+=Number(data.totalEnergyResumes[generator])
    })
  } else {
    totalEnergy = 2912
  }
  if (totalEnergy>100){
    sizes[0] = sizes[0]*0.75
    sizes[1] = sizes[1]*0.75
    sizes[2] = sizes[2]*0.75
  }
  return (
    <div className={classes.container}><Center>
      <Container my="md">
        <Grid>
          <Grid.Col xs={6} lg={3} xl={3} >
            <Grid>
              <Grid.Col span={12}>
                <Center><Text size={sizes[0]} color={'white'} weight={'semibold'}>Generación eléctrica</Text></Center>
              </Grid.Col>
              <Grid.Col span={12}>
                <Center><Text size={sizes[1]} color={'white'} weight={'bold'}>{totalEnergy}</Text></Center>
              </Grid.Col>
              <Grid.Col span={12}>
                <Center><Text size={sizes[2]} color={'white'} weight={'semibold'}>MWh</Text></Center>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col xs={6} lg={3} xl={3}><Grid>
            <Grid.Col span={12}>
              <Center><Text size={sizes[0]} color={'white'} weight={'semibold'}>Equivalente al consumo de</Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[1]} color={'white'} weight={'bold'}>{(totalEnergy*0.709*0.126).toFixed(2)}</Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[2]} color={'white'} weight={'semibold'}>casas durante 1 año</Text></Center>
            </Grid.Col>
          </Grid></Grid.Col>
          <Grid.Col xs={6} lg={3} xl={3}><Grid>
            <Grid.Col span={12}>
              <Center><Text size={sizes[0]} color={'white'} weight={'semibold'}>Se compensaron</Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[1]} color={'white'} weight={'bold'}>{(totalEnergy*0.709).toFixed(1)}</Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[2]} color={'white'} weight={'semibold'}>TON de CO2</Text></Center>
            </Grid.Col>
          </Grid></Grid.Col>
          <Grid.Col xs={6} lg={3} xl={3}><Grid>
            <Grid.Col span={12}>
              <Center><Text size={sizes[0]} color={'white'} weight={'semibold'}>Que equivale a plantar

              </Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[1]} color={'white'} weight={'bold'}>{(totalEnergy*0.709*16.5).toFixed(1)}</Text></Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <Center><Text size={sizes[2]} color={'white'} weight={'semibold'}>árboles</Text></Center>
            </Grid.Col>
          </Grid></Grid.Col>
        </Grid>
      </Container>
    </Center></div>



  );
}