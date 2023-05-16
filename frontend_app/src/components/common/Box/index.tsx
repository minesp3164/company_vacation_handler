import { PropsWithChildren, ReactElement } from 'react';

export default function Box({ children }: PropsWithChildren): ReactElement {
  return (
    <div
      className="
        flex
        p-5
        flex-col
        gap-y-4
        shadow-md
        rounded-md
        w-full
      "
    >
      { children }
    </div>
  );
}
