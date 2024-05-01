"use client";
import styles from "./page.module.css";
import Stack from "./Stack.js";
import { useState } from "react";

export default function Home() {

  let initialTransparency = [true, true, true, true, true, true, true, true, true]

  const [isTransparent, setTransparent] = useState(initialTransparency)
  const [stack, setStack] = useState(new Stack())
  
  let temp : [index : number, transparency: boolean]

  const onBackButtonClick = () => {
    if(stack.isEmpty()){
      window.alert("Geri alınacak bir hamle yok.");
    }
    else{
      temp = stack.pop();
      const nextTransparency = isTransparent.map((c, i) => {
        if (i === temp[0]) {
          // Change the value of the clicked square's transparency
          return temp[1]
        
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setTransparent(nextTransparency);
    }
  };

  function onSquareClick(index) {    
    
    const nextTransparency = isTransparent.map((c, i) => {
      if (i === index) {
        // Change the value of the clicked square's transparency
        if (c == true){
          stack.push([i, true]);
          return false;
        }
          
        else{
          stack.push([i, false])
          return true;
        }
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setTransparent(nextTransparency);
    
  }

  return (
    <main className={styles.main}>
      
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>

        <ul>
          {isTransparent.map((counter, i) => (
          <li key={i}>
            {counter}
            <button className={ isTransparent[i] ? styles.transparent : styles.square }onClick={() => {
              onSquareClick(i);
            }}>X</button>
          </li>
          ))}
        </ul>
        
        
      </div>

    
    </main>
  );
}
