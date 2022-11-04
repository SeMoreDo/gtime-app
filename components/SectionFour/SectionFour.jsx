import { createStyles, Table, Title, Anchor, Text, Group, ScrollArea, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: '#efefef !important',
  }
}));


export default function TableReviews({ data }) {
  const { classes, theme } = useStyles();

  const rows = data.map((row) => {

    return (
      <tr key={row.title}>
        <td>
          <Anchor component='a' size="sm" onClick={(event) => event.preventDefault()}>
            {row.title}
          </Anchor>
        </td>
        <td>{row.periodo}</td>
        <td>
          <Anchor component='a' size="sm" onClick={(event) => event.preventDefault()}>
            {row.place}
          </Anchor>
        </td>
        <td>{row.certFile.generated}</td>
        <td>{row.energy+' '+row.unit}</td>
        <td>
          <a href={'pdf/'+row.certFile.filePath}>Ver certificado</a>
        </td>
      </tr>
    );
  });

  return (
    <div className={classes.container}><Center>
      
    <ScrollArea>
    <Title size={'h1'}>Antecedentes</Title>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Certificado</th>
            <th>Período</th>
            <th>Central</th>
            <th>Generado</th>
            <th>Energía</th>
            <th>Visualización</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  </Center></div>
    


  );
}