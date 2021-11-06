import React  from 'react';
import styles from './Robot.module.css'

interface RobotProps {
  id: number;
  name: string;
  email: string
}

const Robot: React.FC<RobotProps> = ({id,name,email}) => {
  return (
    <div className={styles.robotContainer}>
      <h1>{id}</h1>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default Robot