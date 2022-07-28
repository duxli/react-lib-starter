import React from 'react';

export const HELLO_WORLD = 'Hello World!';

export function getHelloWorld(): string {
  return HELLO_WORLD;
}

export const HelloWorld: React.FC = () => <>{getHelloWorld()}</>;
