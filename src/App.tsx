import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppShell, Group, Container, Anchor } from '@mantine/core';
import { IconHome, IconForms, IconClick, IconLayoutNavbar, IconInfoCircle, IconSelector } from '@tabler/icons-react';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import ButtonsPage from './pages/ButtonsPage';
import FormsPage from './pages/FormsPage';
import TooltipPage from './pages/TooltipPage';
import ComboboxPage from './pages/ComboboxPage';

function App() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home', icon: <IconHome size={16} /> },
    { to: '/tabs', label: 'Tabs', icon: <IconLayoutNavbar size={16} /> },
    { to: '/buttons', label: 'Buttons', icon: <IconClick size={16} /> },
    { to: '/forms', label: 'Forms', icon: <IconForms size={16} /> },
    { to: '/tooltip', label: 'Tooltip', icon: <IconInfoCircle size={16} /> },
    { to: '/combobox', label: 'Combobox', icon: <IconSelector size={16} /> },
  ];

  return (
    <AppShell
      header={{ height: 50 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" gap="lg">
          {navItems.map((item) => (
            <Anchor
              key={item.to}
              component={Link}
              to={item.to}
              fw={location.pathname === item.to ? 700 : 400}
              underline={location.pathname === item.to ? 'always' : 'never'}
              c={location.pathname === item.to ? 'blue' : 'dimmed'}
            >
              <Group gap={4}>
                {item.icon}
                {item.label}
              </Group>
            </Anchor>
          ))}
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/tooltip" element={<TooltipPage />} />
            <Route path="/combobox" element={<ComboboxPage />} />
          </Routes>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
