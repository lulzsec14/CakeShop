import React from 'react';
import { useRive } from '@rive-app/react-canvas';

const Baker = () => {
  const { rive, RiveComponent } = useRive({
    src: 'Cake.riv',
    autoplay: true,
  });

  return (
    <>
      <div
        style={{
          width: '50%',
          height: '50vh',
          // border: 'solid 2px',
          background: '#B27C7C',
          padding: '2em',
        }}
      >
        <RiveComponent />
      </div>
    </>
  );
};

export default Baker;
