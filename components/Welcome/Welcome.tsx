import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Bienvenidos a {' '}
        <Text inherit variant="gradient" component="span">
          GTIME
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
      Plataformas de trazabilidad energética para energías limpias, desde la generación hasta su llegada a los usuarios, con información energética transparente y en tiempo real.{' '}
        <Anchor href="https://gtime.io" size="lg">
          GTIME.io
        </Anchor>
      </Text>
    </>
  );
}
