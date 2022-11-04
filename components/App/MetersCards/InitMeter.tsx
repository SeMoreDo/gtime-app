import React, { useState } from "react";
import { Card, Image, Text, Badge, RingProgress, Button, Group, useMantineTheme, Grid, Container, Center } from '@mantine/core';

type Props = {
  mainName: string;
  description: string;
  status: boolean;
  imageSource: string;
  techTypeImg: string;
  energy: number;
  totalEnergy: object;
  data: object;
  hashID: string;
}

export default function InitMeter({data}: Props) {
  const [cardData, setCardData] = useState({
    title: data.central.mainName ? data.central.mainName : 'Title',
    description: data.central.description ? data.central.description : 'Description',
    status: data.central.status ? data.central.status : true,
    imageSource: data.central.imageSource ? data.central.imageSource : '#',
    techTypeImg: data.central.techTypeImg ? data.central.techTypeImg : '#',
  });
  let totalEnergy = 0
  Object.keys(data.totalEnergy).map(generator=>{
    return totalEnergy+=Number(data.totalEnergy[generator])
  })
  const theme = useMantineTheme();
  console.log(totalEnergy)
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];
  return (
    <div>
      <Card shadow="sm" p="lg" style={{backgroundColor: '#1b1534 !important'}}>
        <Container>
          <Grid>
            {/* <Grid.Col span={12}>{IMG}</Grid.Col> */}
            <Grid.Col span={8}>
              <Image radius={'md'} src={cardData.imageSource} height={160} alt={cardData.title} />
            </Grid.Col>
            <Grid.Col span={4}>
              <Grid>
                <Grid.Col span={12}>
                  <Center><RingProgress
                    size={120}
                    roundCaps
                    thickness={14}
                    sections={[{ value: 100*Number(data.totalEnergy[data.central.hashID]/totalEnergy).toFixed(2), color: 'purple' }]}
                    label={
                      <Center>
                        <Image src={cardData.techTypeImg} />
                      </Center>
                    }
                  /></Center>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Center>
                    <Text size={'xl'} color={'white'} weight={"bold"}>{100*(Number(data.totalEnergy[data.central.hashID]/totalEnergy).toFixed(1))} %</Text>
                    </Center>
                  </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500} color={'white'} >{cardData.title}</Text>
          {/* <Badge color="green" variant="light">
            {cardData.status ? 'En Línea' : 'Sin conexión'}
          </Badge> */}
        </Group>

        <Text size="sm" style={{ color: '#FFF', lineHeight: 1.5 }}>
          {cardData.description}
        </Text>

        {/* <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Ver más información
        </Button> */}
      </Card>
    </div>
  );
}