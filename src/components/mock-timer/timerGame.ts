export interface Callback {
    (): void;
}

export function timerGame(callback: Callback): void {
    setTimeout(callback, 2000);
}

export function infiniteTimerGame(callback: Callback): void {
    setTimeout(() => {      
      callback && callback();
      
      // next timer will be in 10 seconds
      setTimeout(() => {
        infiniteTimerGame(callback);
      }, 10000);
    }, 1000);
}