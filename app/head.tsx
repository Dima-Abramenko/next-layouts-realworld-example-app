// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Added @ts-nocheck here as property 'precedence' does not exist on type
// 'DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>'
// but this new React-specific property is required
// for adding <link rel="stylesheet" /> in Next.js 13+ head component:
// https://beta.nextjs.org/docs/api-reference/file-conventions/head
import type { ReactElement } from 'react';

const Head = (): ReactElement => (
  <>
    <title>Conduit</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta
      content="RealWorld app implementation powered by Next.js 13+ (Layout, Server Components and so on)"
      name="description"
    />
    <link href="/public/favicon.ico" rel="icon" />
    {/* Import IonIcon icons, Google Fonts & custom Bootstrap 4 theme */}
    {/* It's necessary to ensure all RealWorld frontends had consistent UI */}
    {/* For more details: https://www.realworld.how/docs/specs/frontend-specs/styles */}
    <link
      href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      precedence="default"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
      precedence="default"
      rel="stylesheet"
      type="text/css"
    />
    <link href="//demo.productionready.io/main.css" precedence="default" rel="stylesheet" />
  </>
);

export default Head;
