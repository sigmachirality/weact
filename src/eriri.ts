import React from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { jsxDEV } from 'react/jsx-dev-runtime';
import { uwuify } from './utaha';

function uwuifyChildren(children) {
  if (typeof children === 'string') return uwuify(children);
  if (Array.isArray(children)) return children.map?.(child => 
    (typeof child === 'string')
      ? uwuify(child)
      : child
  );
  return children;
}

function cultureProps(props) {
  if (props?.__bonk === true) return props;
  return { ...props, children: uwuifyChildren(props?.children) };
}

export function cweateViwtualNode(type, props, key) {
  return jsx(type, cultureProps(props), key);
}

export function cweateStaticNode(type, props, key) {
  return jsxs(type, cultureProps(props), key);
}

export function cweateViwtualNodeDev(type, props, key) {
  return jsxDEV(type, cultureProps(props), key);
}

export function cweateEwement(type, props, ...initialChildren) {
  const children = props?.__bonk === true ? initialChildren : uwuifyChildren(initialChildren);
  return React.createElement(type, props, ...children);
}
