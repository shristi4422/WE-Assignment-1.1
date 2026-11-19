# Event Loop Notes

## Predicted Order

1. sync start
2. sync inside async fn
3. sync end
4. promise.then
5. queueMicrotask
6. nextTick
7. after await
8. setTimeout 
9. setImmediate


### Actual Order
1. sync start
2. sync inside async fn
3. sync end
4. nextTick
5. promise.then
6. queueMicrotask
7. after await
8. setTimeout 
9. setImmediate


Microtasks executed before macrotasks.
process.nextTick excuted before Promise microtasks.