import { createSignal, Match, onMount, Switch } from 'solid-js';
import { TModalComponent, TModalType } from './types.ts';
import { BottomModal } from './BottomModal';
import { SimpleModal } from './SimpleModal';
import { breakpoints } from '../../common';

export const Modal: TModalComponent = (props) => {
  const [type, setType] = createSignal<TModalType>('bottom');

  onMount(() => {
    if (window.innerWidth > breakpoints.md) {
      setType('simple');
    }
  });

  return (
    <Switch fallback={<BottomModal {...props} />}>
      <Match when={type() === 'simple'}>
        <SimpleModal {...props} />
      </Match>
      <Match when={type() === 'bottom'}>
        <BottomModal {...props} />
      </Match>
    </Switch>
  );
};
