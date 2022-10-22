import React from 'react';
import styles from './GestureCircle.module.scss';
import { useGestureCircleLogic } from './GestureCircle.logic';
import IconPaper from 'assets/icon-paper.svg';

export interface GestureCircleProps {
}

export const GestureCircle: React.FC<GestureCircleProps> = (props) => {
  const logic = useGestureCircleLogic(props);

  return <>
    <button className={styles.gestureCircle}>
      <img src={IconPaper} alt='Paper Gesture'/>
    </button>
  </>;
};