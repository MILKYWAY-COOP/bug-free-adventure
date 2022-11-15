import { Routes, Route } from 'react-router-dom';

import * as pages from '../Pages';

const Paths = {
  home: '/',
  portfolio: '/portfolio',
  wallpapers: '/wallpapers',
  bio: '/bio',
  error: '*'
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<pages.Portfolio />} />
      <Route path={Paths.portfolio} element={<pages.Portfolio />} />
      <Route path={Paths.wallpapers} element={<pages.Wallpapers />} />
      <Route path={Paths.bio} element={<pages.Bio />} />
      <Route path={Paths.error} element={<pages.Error />} />
    </Routes>
  );
};
