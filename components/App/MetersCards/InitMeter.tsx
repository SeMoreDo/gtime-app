import React, { useState} from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

type Props = {
  title: string;
  description: Array<any>;
  status: boolean;
  imgSrc: string;
}

export default function InitMeter(props: Props) {
  const [ cardData, setCardData ] = useState({
    title: props.title?props.title:'Title',
    description: props.description?props.description:'Description',
    status: props.status?props.status:true,
    imgSrc: props.imgSrc?props.imgSrc:'#'
  })
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={cardData.imgSrc} height={160} alt={cardData.title} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{cardData.title}</Text>
          <Badge color="green" variant="light">
          {cardData.status?'En Línea':'Sin conexión'}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {cardData.description}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Ver más información
        </Button>
      </Card>
    </div>
  );
}