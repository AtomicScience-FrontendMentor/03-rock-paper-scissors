import React from 'react';
import styles from './GestureCircle.module.scss';
import { useGestureCircleLogic } from './GestureCircle.logic';

import IconRock from 'assets/icon-rock.svg';
import IconPaper from 'assets/icon-paper.svg';
import IconScissors from 'assets/icon-scissors.svg';

export type GestureType = keyof typeof gestureTypeToClass;

const gestureTypeToClass = {
  'rock' : 'rockGestureCircle',
  'paper': 'paperGestureCircle',
  'scissors': 'scissorsGestureCircle',
};

const gestureTypeToImageSrc = {
  'rock': IconRock,
  'paper': IconPaper,
  'scissors': IconScissors,
};

export interface GestureCircleProps {
  gestureType : GestureType
}

export const GestureCircle: React.FC<GestureCircleProps> = (props) => {
  const logic = useGestureCircleLogic(props);

  return <>
    <button className={styles[gestureTypeToClass[props.gestureType]]}>
      <img
        src={gestureTypeToImageSrc[props.gestureType]}
        alt='Gesture'
      />
    </button>
  </>;
};