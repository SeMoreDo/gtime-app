import { createStyles, Grid, Image, Center, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 150,
    backgroundColor: "#1b1534 !important",
    // backgroundColor: theme.colors.blue[6],
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
  headerText: {
    color: "#FFF",
    fontSize: 22,
  }
}));

export default function SectionOne() {
  const { classes } = useStyles();
  return <div className={classes.container}>
    <Grid align={'center'}>
            <Grid.Col span={4}><a href='/'><Image src='https://www.phinet.cl/wp-content/uploads/2022/09/SE_Logo_White_RGB.png' width={280} style={{ marginLeft: 20, marginTop: 20}}
             ></Image></a></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col sm={'none'} span={4}>
              <MediaQuery smallerThan={'sm'} styles={{ display: 'none'}}>
              <span className={classes.headerText}>Conoce la energía de tus productos</span>
              </MediaQuery>
              </Grid.Col>
              
        </Grid>
  </div>;
}