// import { createStyles, Card, Overlay, CardProps, Button, Text, Center } from '@mantine/core';

// const useStyles = createStyles((theme) => ({
//   card: {
//     height: 240,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },

//   content: {
//     position: 'absolute',
//     padding: theme.spacing.xl,
//     zIndex: 1,
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//   },

//   action: {
//     position: 'absolute',
//     bottom: theme.spacing.xl,
//     right: theme.spacing.xl,
//   },

//   title: {
//     color: theme.white,
//     marginBottom: theme.spacing.xs / 2,
//     fontSize: 38
//   },

//   description: {
//     color: theme.white,
//     maxWidth: 420,
//     fontSize: 28
//   },
// }));

// // interface ImageActionBannerProps {
// //   title: React.ReactNode;
// //   description: React.ReactNode;
// //   image: string;
// //   action: {
// //     label: string;
// //     link: string;
// //   };
// // }

// export default function ImageTitle({
//   title,
//   description,
//   image,
//   action,
//   style,
//   className,
//   ...others
// }) {
//   const { classes, cx, theme } = useStyles();

//   return (
//     <Card
//       radius={0}
//       style={{ backgroundImage: `url(${image})`, ...style }}
//       className={cx(classes.card, className)}
//       {...others}
//     >
//       <Overlay
//         gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
//         opacity={0.55}
//         zIndex={0}
//       />
//       <Center><div className={classes.content} style={{ marginTop: 200, marginLeft: 250 }}>

//         <Text size="lg" weight={700} className={classes.title}>
//           {title}
//         </Text>

//         <Text size="sm" className={classes.description}>
//           {description}
//         </Text>
//         {/* 
//         <Button
//           className={classes.action}
//           variant="white"
//           color="dark"
//           component="a"
//           size="xs"
//           href={action.link}
//         >
//           {action.label}
//         </Button> */}
//       </div></Center>

//     </Card>
//   );
// }

import { createStyles, Container, Title, Text, Button } from '@mantine/core';
//title={'Trazabilidad energética'} description={'Conoce el origen de la energía'} image={'https://www.phinet.cl/wp-content/uploads/2022/09/head-image.jpg'} action={{ link: '' }}
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://www.phinet.cl/wp-content/uploads/2022/09/head-image.jpg)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export default function Validador(
  {
      title,
      description,
      image,
      action,
      style,
      className,
      ...others
  }
) {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Trazabilidad {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                energética
              </Text>{' '}
              mediante vector GTIME.
            </Title>

            {/* <Text className={classes.description} mt={30}>
            Conoce el origen de la energía
            </Text> */}
{/* 
            <Button
              variant="gradient"
              gradient={{ from: 'purple', to: 'blue' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Ver origen
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
}