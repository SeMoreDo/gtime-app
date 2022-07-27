import { Navbar, Button, Stack } from '@mantine/core';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import { useRouter } from 'next/router';
const Link = ({children, href}) => {
  const router = useRouter ()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <Button variant="outline"href={href} onClick={handleClick}><ChevronRightIcon />
      {children}</Button>
  )
}

export default function NavigationBar() {

  // Same can be applied to Aside component with Aside.Section component
  return (
    <>
      {/* First section with normal height (depends on section content) */}
      <Navbar.Section></Navbar.Section>

      {/* Grow section will take all available space that is not taken by first and last sections */}
      <Navbar.Section grow>
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/certificados'}>Certificados</Link>
          {/* <Link href={'/estado'}>Estado</Link>
          <Button variant="outline"><ChevronRightIcon />Visor</Button> */}

        </Stack>
      </Navbar.Section>

      {/* Last section with normal height (depends on section content) */}
      <Navbar.Section><ColorSchemeToggle /></Navbar.Section>
    </>
  );
}