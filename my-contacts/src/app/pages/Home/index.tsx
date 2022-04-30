import { InputSearch } from '@ui/elements/InputSearch';
import { BaseLayout } from '@ui/layouts/BaseLayout';

export const HomePage = () => {
  return (
    <BaseLayout>
      <InputSearch />
      <h1>Home</h1>
    </BaseLayout>
  );
};
