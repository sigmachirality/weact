import React from "react";
import { cweateEwement } from './eriri';

export const createElement: any = cweateEwement;

const Weact = {...React};
(Weact as any).createElement = cweateEwement;
export default Weact;
