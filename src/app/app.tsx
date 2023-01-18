import { Outlet, ReactLocation, Route, Router } from '@tanstack/react-location';

import { Header } from './header';

import {  Ranges } from '~/pages';

import { CenteredLayout } from '~/components';

import Refactor1 from '~/pages/refactor-1/refactor-1';
import Refactor2 from '~/pages/refactor-2/refactor-2';
import Optimize1 from '~/pages/optimize-1/optimize-1';
import Optimize2 from '~/pages/optimize-2/optimize-2';

const Welcome = () => (
  <CenteredLayout className="gap-4">
    <div className="text-3xl">Welcome to 24Slides test task!</div>
    <div>Explore pages and their code to understand what we can improve here :)</div>
  </CenteredLayout>
);

const reactLocation = new ReactLocation();

const routes: Route[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'refactor-1',
    element: <Refactor1 />,
  },
  {
    path: 'refactor-2',
    element: <Refactor2 />,
  },
  {
    path: 'optimize-1',
    element: <Optimize1 />,
  },
  {
    path: 'optimize-2',
    element: <Optimize2 />,
  },
  {
    path: 'ranges',
    element: <Ranges />,
  },
];

export const App = () => (
  <Router location={reactLocation} routes={routes}>
    <Header />
    <Outlet />
  </Router>
);
