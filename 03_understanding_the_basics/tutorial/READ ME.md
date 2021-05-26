# Section3
## Modules used
* http: Create servers and listen in the port
* fs: Handle file system requests, creating files.


## Buffers
Buffers are similar to bus stops. It is a place to store the incoming data, and then you can work with that, by applying any logic you want.

To wotk with it, you have to use the 

```javascript
req.on(eventToListen:string, (chuckOfData)=>{
  //Function trigered every time it listen to the 'eventToListen'
})
```

*eventToListen* may be :
* 'close'
* 'data'
* 'end'
* 'error'
* 'readable'


