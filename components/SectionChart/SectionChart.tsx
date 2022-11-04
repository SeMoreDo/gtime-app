import { createStyles, Table, Title, Anchor, ScrollArea, Container, Grid, RingProgress, SimpleGrid, Paper, Center, Group, Text, Image } from '@mantine/core';
import EnergyChart from '../App/Chart/MonthlyChart';

interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: 'eolic' | 'solar';
    energy: Array<any>;
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
    backgroundColor: '#FFF !important',
    height: '100%'
  }
}));


export default function SectionChart(props) {
  const { classes, theme } = useStyles();
  return (
    <div className={classes.container}><Center>
      <Container my="md">
        <Title size={'h1'} color='purple'>Datos energéticos</Title>
        <Grid>
          <Grid.Col xs={12}>
            <EnergyChart/>
          </Grid.Col>
        </Grid>
      </Container>
    </Center></div>
  );
  }
