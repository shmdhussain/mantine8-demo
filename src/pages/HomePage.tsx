import { Title, Text, Stack, Card, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Stack>
      <Title order={1}>Mantine 8 Demo</Title>
      <Text>Select a component to explore:</Text>

      <SimpleGrid cols={3}>
        <Card component={Link} to="/tabs" shadow="sm" padding="lg" withBorder style={{ textDecoration: 'none' }}>
          <Title order={3}>Tabs</Title>
          <Text size="sm" c="dimmed">
            Explore tab components with overflow
          </Text>
        </Card>

        <Card component={Link} to="/buttons" shadow="sm" padding="lg" withBorder style={{ textDecoration: 'none' }}>
          <Title order={3}>Buttons</Title>
          <Text size="sm" c="dimmed">
            Various button variants and styles
          </Text>
        </Card>

        <Card component={Link} to="/forms" shadow="sm" padding="lg" withBorder style={{ textDecoration: 'none' }}>
          <Title order={3}>Forms</Title>
          <Text size="sm" c="dimmed">
            Form inputs and controls
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}

export default HomePage;
