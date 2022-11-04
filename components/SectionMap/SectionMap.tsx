import { createStyles, Table, Title, Anchor, ScrollArea, Container, Grid, RingProgress, SimpleGrid, Paper, Center, Group, Text, Image, Box } from '@mantine/core';
import InitMap from '../App/Maps/InitMap';

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


export default function Map({ data }) {
  const { classes, theme } = useStyles();
  console.log(data)
  let origins = data.filter(cg => cg.hashID!==cg.ownerHashId);
  return (
    <div className={classes.container}><Center>
      <InitMap origins={origins}></InitMap>
    </Center></div>



  );
}