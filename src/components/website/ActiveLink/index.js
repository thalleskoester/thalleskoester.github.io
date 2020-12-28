import {useRouter} from 'next/router';
import Link from 'next/link';
import React from 'react';

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const active = asPath === props.href || asPath === props.as;

  return (
    <Link {...props}>
      {React.cloneElement(children, { active })}
    </Link>
  );
};

export default ActiveLink;