import { createStyles, Table, Title, Anchor, ScrollArea, Container, Grid, RingProgress, SimpleGrid, Paper, Center, Group, Text, Image } from '@mantine/core';

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
  return (
    <div className={classes.container}><Center>
      <Container my="md">
        <Grid>
          <Grid.Col span={12}>
            <Center><Text size={18} color={'white'}>Powered by Phineal</Text></Center>
          </Grid.Col>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={3}><Center><a href='https://twitter.com/phinet_energy'><Image src='./assets/brand-twitter.png' width={40}></Image></a></Center></Grid.Col>
              <Grid.Col span={3}><Center><a href='https://www.linkedin.com/company/phinetenergy/'><Image src='./assets/brand-linkedin.png' width={40}></Image></a></Center></Grid.Col>
              <Grid.Col span={3}><Center><a href='https://www.facebook.com/phinetenergy'><Image src='./assets/brand-facebook.png' width={40}></Image></a></Center></Grid.Col>
              <Grid.Col span={3}><Center><a href='https://www.instagram.com/phinet.energy/'><Image src='./assets/brand-instagram.png' width={40}></Image></a></Center></Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Center></div>



  );
  }