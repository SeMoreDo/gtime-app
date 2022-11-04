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
    backgroundColor: '#1b1534 !important',
  }
}));


export default function TableReviews({ data }) {
  const { classes, theme } = useStyles();
  let centrals = data.gtimeData?data.gtimeData.filter(cg => cg.hashID!==cg.ownerHashId):[];
  let totalEnergy = data.totalEnergyResumes;
  if (centrals.length>0){
    return (
      <div className={classes.container}><Center>
        <Container my="md">
          <Title size={'h1'}>{centrals.length>1?'Centrales de donde viene nuestra energía':'Central de donde viene nuestra energía'}</Title>
          <Grid>
            {centrals.map(central=>{
              return (
                <Grid.Col key={central.hashID} xs={12}><InitMeter data={{central,totalEnergy}} status={true} /></Grid.Col>
              )
            })}
          </Grid>
        </Container>
      </Center></div>
  
  
  
    );
  }
  else {
    return <></>
  }
  }