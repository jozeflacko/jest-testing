import { timerGame, infiniteTimerGame, Callback }  from './timerGame';

describe('timer-mock',()=>{

    // setup mocking timer before each test
    beforeEach(()=>{
        jest.useFakeTimers(); //will mock all timer functions
    });

    test('waits 1 second before ending the game', () => {
    
        // creating callback function and calling timerGame with passed callback
        // it should run the callback after 2 seconds
        var myCallback: Callback = ()=>{};    
        timerGame(myCallback);

        // TEST RESULTS:
        
        // expecting that setTimeout was called exactly 1 time
        expect(setTimeout).toHaveBeenCalledTimes(1);
        
        // ecpecting that setTimeout was called with any function and after 2000ms
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

        // ecpecting that setTimeout was called with our callback function and after 2000ms
        expect(setTimeout).toHaveBeenLastCalledWith(myCallback, 2000);
    });

});

/**
 * Run all timers
 */
describe('Fast forward all timers',()=>{
    test('calls the callback after 1 second', () => {
        const callback = jest.fn();
      
        timerGame(callback);
      
        // At this point in time, the callback should not have been called yet
        // because is is setTimeout
        expect(callback).not.toBeCalled();
      
        // Fast-forward until all timers have been executed
        jest.runAllTimers();
      
        // Now our callback should have been called!
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
      });
});

/*
    Run Pending Timers
    There are also scenarios where you might have a recursive timer 
    -- that is a timer that sets a new timer in its own callback. 
    For these, running all the timers would be an endless loop… 
    so something like jest.runAllTimers() is not desirable. 
    For these cases you might use jest.runOnlyPendingTimers():
 */

describe('timer-mock for pending timers -> timer in timer',()=>{

    beforeEach(()=>{
        jest.useFakeTimers();
    });

    test('schedules a 10-second timer after 1 second', () => {
        const callback = jest.fn();
    
        infiniteTimerGame(callback);
    
        // At this point in time, there should have been a single call to
        // setTimeout to schedule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    
        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        jest.runOnlyPendingTimers();
    
        // At this point, our 1-second timer should have fired it's callback
        expect(callback).toBeCalled();
    
        // And it should have created a new timer to start the game over in
        // 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
      });

});

