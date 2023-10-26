import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from '~/components';

export default component$(() => (
  <>
    <Tabs items={[ 'Todos']} />
    <main>
      <Slot />
    </main>
  </>
));