import { useState } from 'react';
import { TextInput, PasswordInput, Checkbox, Button, Stack, Title, Input } from '@mantine/core';
import { IconAt, IconUser, IconAlertCircle, IconCheck } from '@tabler/icons-react';

function FormsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorField, setErrorField] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password, username, errorField, rememberMe });
  };

  return (
    <Stack maw={400}>
      <Title order={2}>Forms Demo</Title>

      <TextInput
        label="Email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        leftSection={<IconAt size={16} />}
      />

      <PasswordInput
        label="Password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <TextInput
        label="Username"
        placeholder="Enter username"
        description="This is a descriptionss"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        leftSection={<IconUser size={16} />}
        rightSection={<IconCheck size={16} color="green" />}
      />
      <TextInput
        label="With error"
        placeholder="Enter value"
        description="This field has an error"
        error={errorField === '' ? "This field has an error" : undefined}
        value={errorField}
        onChange={(e) => setErrorField(e.currentTarget.value)}
        rightSection={<IconAlertCircle size={16} color="red" />}
      />

      <Checkbox
        label="Remember me"
        checked={rememberMe}
        onChange={(e) => {
          console.log('Checkbox changed:', e.currentTarget.checked);
          setRememberMe(e.currentTarget.checked);
        }}
      />

      <Button type="submit" onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}

export default FormsPage;
