import { Button, Group, Stack, Title } from '@mantine/core';

function ButtonsPage() {
  return (
    <Stack>
      <Title order={2}>Buttons Demo</Title>

      <Title order={4}>Variants</Title>
      <Group>
        <Button variant="filled">Filled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="light">Light</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="transparent">Transparent</Button>
        <Button variant="white">White</Button>
        <Button variant="default">Default</Button>
      </Group>

      <Title order={4}>Colors</Title>
      <Group>
        <Button color="blue">Blue</Button>
        <Button color="red">Red</Button>
        <Button color="green">Green</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="orange">Orange</Button>
        <Button color="teal">Teal</Button>
        <Button color="violet">Violet</Button>
        <Button color="pink">Pink</Button>
      </Group>

      <Title order={4}>Sizes</Title>
      <Group>
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </Group>

      <Title order={4}>States</Title>
      <Group>
        <Button>Normal</Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
      </Group>
    </Stack>
  );
}

export default ButtonsPage;
