import React from 'react';
import styles from './MainPage.module.scss';
import { useMainPageLogic } from './MainPage.logic';
import { GestureCircle } from 'components/GestureCircle';

export interface MainPageProps {
}

export const MainPage: React.FC<MainPageProps> = (props) => {
  const logic = useMainPageLogic(props);

  return <div className={styles['centering-wrapper']}>
    <GestureCircle gestureType={'rock'}/>
    <GestureCircle gestureType={'paper'}/>
    <GestureCircle gestureType={'scissors'}/>
  </div>;
};