import React, { useState } from 'react';
import { Header, MediaQuery, Burger, useMantineTheme, Image } from '@mantine/core';

export default function GTIMEHeader() {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return <Header height={70} p="md">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
            />
        </MediaQuery>
        <Image src='https://gtime.io/wp-content/uploads/2021/04/Logo-portada.png' width={180}></Image>
           </Header>
}