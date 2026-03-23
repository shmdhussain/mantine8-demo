import { Tooltip, Button, Group, Stack, Title, Text } from '@mantine/core';

function TooltipPage() {
  return (
    <Stack>
      <Title order={2}>Tooltip Demo</Title>

      <Title order={4}>With Arrow</Title>
      <Group>
        <Tooltip label="Tooltip with arrow" withArrow>
          <Button>Arrow default</Button>
        </Tooltip>
        <Tooltip label="Arrow size 8" withArrow arrowSize={8}>
          <Button variant="outline">Arrow size 8</Button>
        </Tooltip>
        <Tooltip label="Arrow size 12" withArrow arrowSize={12}>
          <Button variant="light">Arrow size 12</Button>
        </Tooltip>
      </Group>

      <Title order={4}>Positions with Arrow</Title>
      <Group>
        <Tooltip label="Top Top Top Top Top Top Top Top " withArrow position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip label="Bottom" withArrow position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip label="Left" withArrow position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip label="Right" withArrow position="right">
          <Button>Right</Button>
        </Tooltip>
      </Group>

      <Title order={4}>Colors with Arrow</Title>
      <Group>
        <Tooltip label="Blue tooltip" withArrow color="blue">
          <Button color="blue">Blue</Button>
        </Tooltip>
        <Tooltip label="Red tooltip" withArrow color="red">
          <Button color="red">Red</Button>
        </Tooltip>
        <Tooltip label="Teal tooltip" withArrow color="teal">
          <Button color="teal">Teal</Button>
        </Tooltip>
        <Tooltip label="Grape tooltip" withArrow color="grape">
          <Button color="grape">Grape</Button>
        </Tooltip>
      </Group>

      <Title order={4}>Multiline with Arrow</Title>
      <Group>
        <Tooltip
          label="This is a multiline tooltip that wraps text to demonstrate longer content with an arrow"
          withArrow
          multiline
          w={220}
        >
          <Button variant="outline">Multiline</Button>
        </Tooltip>
      </Group>

      <Title order={4}>On Other Elements</Title>
      <Group>
        <Tooltip label="Hover over text" withArrow>
          <Text style={{ cursor: 'default' }}>Hover me</Text>
        </Tooltip>
      </Group>
    </Stack>
  );
}

export default TooltipPage;
