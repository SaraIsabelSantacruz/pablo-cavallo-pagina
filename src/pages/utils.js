export const SelectMenuNav = (pathRoute) => {
  return pathRoute.split('/')[2] ? pathRoute.split('/')[2] : pathRoute.split('/')[1]
};
