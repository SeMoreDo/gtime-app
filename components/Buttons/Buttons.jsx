import { Button } from '@mantine/core';

function ButtonLogin(props) {
    return (<>
        {/* <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button> */}
        <a href={props.src}><Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 30 }}>Iniciar</Button></a>
        {/* <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button> */}
    </>
    );
}

export default ButtonLogin;