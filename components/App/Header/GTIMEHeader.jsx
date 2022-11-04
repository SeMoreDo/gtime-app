import React, { useState } from 'react';
import { Header, MediaQuery, Burger, useMantineTheme, Image, Grid } from '@mantine/core';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
export default function GTIMEHeader() {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return <Header height={70} p="md">
        <Grid>
            <Grid.Col md={6} lg={3}><a href='/'><Image src='https://gtime.io/wp-content/uploads/2021/04/Logo-portada.png' width={180}
            ></Image></a></Grid.Col>
            <Grid.Col md={6} lg={3}></Grid.Col>
            <Grid.Col md={6} lg={3}></Grid.Col>
            <Grid.Col md={6} lg={3}><div style={{ marginTop: -25 }} ><ColorSchemeToggle /></div></Grid.Col>
        </Grid>
    </Header>
}