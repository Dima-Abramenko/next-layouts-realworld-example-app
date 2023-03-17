// TODO: Complete replaceDynamicRoute helper function
export const replaceDynamicRoute = (route: string, slug: string, dynamicValue: string): string =>
  route.replace(`[${slug}]`, encodeURIComponent(dynamicValue));
