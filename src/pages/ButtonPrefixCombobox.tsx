import { useState } from 'react';
import { Combobox, Input, useCombobox, Group } from '@mantine/core';
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
      width="target"
    >
      <Combobox.Target>
        <Input
          component="button"
          type="button"
          styles={{
            wrapper: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #ced4da',
              borderRadius: 4,
              padding: '8px 12px',
            },
          }}
          pointer
          unstyled
          style={{ width: 350 }}
          leftSection={
            <Group gap={4}>
              <IconSearch size={16} />
              <IconFilter size={16} />
              <IconShoppingCart size={16} />
            </Group>
          }
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

export default ButtonPrefixCombobox;
