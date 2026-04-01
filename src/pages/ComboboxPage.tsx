import { useState } from 'react';
import { Combobox, Input, InputBase, useCombobox, Stack, Title, Group, Text, Button } from '@mantine/core';
import { IconSearch, IconFilter, IconShoppingCart } from '@tabler/icons-react';

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

interface Item {
  emoji: string;
  value: string;
  description: string;
}

const richGroceries: Item[] = [
  { emoji: '🍎', value: 'Apples', description: 'Crisp and refreshing fruit' },
  { emoji: '🍌', value: 'Bananas', description: 'Naturally sweet and potassium-rich fruit' },
  { emoji: '🥦', value: 'Broccoli', description: 'Nutrient-packed green vegetable' },
  { emoji: '🥕', value: 'Carrots', description: 'Crunchy and vitamin-rich root vegetable' },
  { emoji: '🍫', value: 'Chocolate', description: 'Indulgent and decadent treat' },
];

function SelectOption({ emoji, value, description }: Item) {
  const [desc, setDesc] = useState(description);
  return (
    <Group>
      <Text fz={20}>{emoji}</Text>
      <div>
        <Text fz="sm" fw={500}>
          {value}
        </Text>
        <Input  />
        <Text fz="xs" opacity={0.6}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function SelectOptionCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const selectedOption = richGroceries.find((item) => item.value === value);

  const options = richGroceries.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        // combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          multiline
        >
          {selectedOption ? (
            selectedOption.emoji + ' ' + selectedOption.value
          ) : (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
        <Combobox.Footer>
          <Button fullWidth variant="light" onClick={() => combobox.resetSelectedOption()}>
            Reset
          </Button>
        </Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function ButtonPrefixCombobox() {
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
        <Input
          component="button"
          type="button"
          styles={{
            wrapper: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ced4da', borderRadius: 4, padding: '8px 12px' },
          }}
          pointer
          unstyled
          style={{ width: 350 }}
          leftSection={<Group gap={4}><IconSearch size={16} /><IconFilter size={16} /><IconShoppingCart size={16} /></Group>}
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick a grocery</Input.Placeholder>}
        </Input>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
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

      <Title order={4}>Custom Select Option</Title>
      <Group>
        <div style={{ width: 300 }}>
          <SelectOptionCombobox />
        </div>
      </Group>

      <Title order={4}>Button with Prefix as Target</Title>
      <Group>
        <ButtonPrefixCombobox />
      </Group>

      <Text size="sm" c="dimmed" mt="md">
        Mantine Combobox is a low-level component for building custom select, autocomplete, and
        multiselect inputs.
      </Text>
    </Stack>
  );
}

export default ComboboxPage;
