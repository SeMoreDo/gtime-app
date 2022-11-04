import { createStyles, Text, Title, TextInput, Button, Image, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function SectionClient(gtimeData) {
  const { classes } = useStyles();
  let certOwner = gtimeData.data.filter(cg => cg.hashID===cg.ownerHashId)[0];
  console.log(certOwner.imageSource)
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>{certOwner.mainName?certOwner.mainName:'Siemens Energy'}</Title>
        <Center>
        <Text size="sm" color="dimmed">
          {certOwner.description?certOwner.description:'Siemens es una potencia tecnológica global que une los mundos digital y físico para beneficiar a los clientes y la sociedad. La empresa se centra en la infraestructura inteligente para edificios y sistemas de energía descentralizados, en la automatización y digitalización en las industrias de procesos y fabricación, y en soluciones de movilidad inteligente para el transporte ferroviario y por carretera.'}
          </Text>
        </Center>
        {/* <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div> */}
      </div>
      <Image src={certOwner.imageSource?certOwner.imageSource:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Siemens_Energy_logo.svg/1200px-Siemens_Energy_logo.svg.png'} className={classes.image} />
    </div>
  );
}