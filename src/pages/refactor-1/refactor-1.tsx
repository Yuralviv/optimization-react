import React, { useState } from 'react';

import { CenteredLayout } from '~/components';

import { Button } from './components/Button/Button';

const buttons = ['fast', 'quality', 'cheap'] as const;

const Refactor1: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((title) => {
          const isSelectedButton = title === selectedButton;
          return (
            <Button
              key={title}
              title={title}
              isSelectedButton={isSelectedButton}
              onClick={() => setSelectedButton(title)}
            />
          )
        })}
      </div>
    </CenteredLayout>
  );
};

export default Refactor1;