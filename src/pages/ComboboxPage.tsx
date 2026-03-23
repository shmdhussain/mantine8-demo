import { useState } from 'react';
import { Combobox, Input, InputBase, useCombobox, Stack, Title, Group, Text } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemons',
  '🥬 Lettuce',
  '🍊 Oranges',
  '🍑 Peaches',
];

function BasicCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick a grocery item</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function SearchableCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = groceries.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase().trim())
  );
  console.log("selected option index 1", combobox.selectedOptionIndex);
  const options = filtered.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search groceries..."
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function ComboboxPage() {
  return (
    <Stack>
      <Title order={2}>Combobox Demo</Title>

      <Title order={4}>Basic Select</Title>
      <Group>
        <div style={{ width: 250 }}>
          <BasicCombobox />
        </div>
      </Group>

      <Title order={4}>Searchable</Title>
      <Group>
        <div style={{ width: 250 }}>
          <SearchableCombobox />
        </div>
      </Group>

      <Text size="sm" c="dimmed" mt="md">
        Mantine Combobox is a low-level component for building custom select, autocomplete, and
        multiselect inputs.
      </Text>
    </Stack>
  );
}

export default ComboboxPage;
