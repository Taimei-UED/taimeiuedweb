import * as React from 'react';
export interface Step { label: React.ReactNode; description?: React.ReactNode; }

export type StepStatus = 'completed' | 'active' | 'loading' | 'upcoming';

/**
 * A single step item — status disc (number / check / spinner) + name + description.
 * The atomic unit composed by <Steps>.
 */
export interface StepItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  status?: StepStatus;
  number?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  /** Darken the label (defaults to true for the active step). */
  selected?: boolean;
  /** Show a check on completed steps instead of the number. */
  checkCompleted?: boolean;
  /** Draw a grey vertical connector line beneath the disc (vertical steppers). */
  connector?: boolean;
}
export declare function StepItem(props: StepItemProps): JSX.Element;

/** Step / progress indicator — Wiz iDM. */
export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  current?: number;
  /** Render a spinner on the active step ("in progress"). */
  loading?: boolean;
  /** Render completed steps with a check icon instead of their number. */
  checkCompleted?: boolean;
  orientation?: 'horizontal' | 'vertical';
}
export declare function Steps(props: StepsProps): JSX.Element;
export default Steps;
