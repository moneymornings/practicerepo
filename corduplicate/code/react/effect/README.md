# Simple Demo of Effects 

This playground can help you “get a feel” for how Effects work in practice.

This example uses setTimeout to schedule a console log with the input text to appear three seconds after the Effect runs. The cleanup function cancels the pending timeout. 

There is a [starter repo](https://github.com/DigitalCraftsStudents/react-code-along-functional-effects), but try to have them setup a new Vite project.

## Start with App

1. Clear is out and add the state, teranary, and button.

## Create Playground component

Walk through the writing the code.
The Effect with console log each key stroke and after 3 seconds, will run another log.

from React Docs

You will see three logs at first: Schedule "a" log, Cancel "a" log, and Schedule "a" log again. Three second later there will also be a log saying a. As you learned earlier, the extra schedule/cancel pair is because React remounts the component once in development to verify that you’ve implemented cleanup well.

Now edit the input to say abc. If you do it fast enough, you’ll see Schedule "ab" log immediately followed by Cancel "ab" log and Schedule "abc" log. React always cleans up the previous render’s Effect before the next render’s Effect. This is why even if you type into the input fast, there is at most one timeout scheduled at a time. Edit the input a few times and watch the console to get a feel for how Effects get cleaned up.

Type something into the input and then immediately press “Unmount the component”. Notice how unmounting cleans up the last render’s Effect. Here, it clears the last timeout before it has a chance to fire.

Finally, edit the component above and comment out the cleanup function so that the timeouts don’t get cancelled. Try typing abcde fast. What do you expect to happen in three seconds? Will console.log(text) inside the timeout print the latest text and produce five abcde logs? Give it a try to check your intuition!

Three seconds later, you should see a sequence of logs (a, ab, abc, abcd, and abcde) rather than five abcde logs. Each Effect “captures” the text value from its corresponding render.  It doesn’t matter that the text state changed: an Effect from the render with text = 'ab' will always see 'ab'. In other words, Effects from each render are isolated from each other. 