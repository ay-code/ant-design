import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="2"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Jack' },
        { value: '2', label: 'Lucy' },
        { value: '3', label: 'yiminghe' },
        { value: '4', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: '1', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: '1', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: '1', label: 'Lucy' }]}
    />
  </Space>
);

export default App;
