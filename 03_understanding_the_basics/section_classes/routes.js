const fs = require('fs')


function requestHandler(req, res)
{
  const url = req.url;
  const method = req.method

  //Each if statement is called to be a route! that is, a page that the browser respond to the client.

  if (url === '/') //Route one
  {
    res.write('<html>')
    res.write('<head><title>Enter message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send me!</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if(url === '/message' && method === 'POST') //Route two
  {
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk)
      body.push(chunk)
    })

    return req.on('end', ()=>{
      const parseBody = Buffer.concat(body).toString()
      message = parseBody.split('=')[1]
      /**
       * fs.writeFileSync('message.txt', message)
       * BLOCK CODE EXECUTION OF THE NEXT LINE OF CODE UNTIL THE TXT FILE IS DONE that is way it is better to use the writeFile instead.
       */
      fs.writeFile('message.txt', message, (err)=>{
        res.writeHead(302, {
          Location: '/'
        })
        return res.end()
      });
    })
  }
  
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
}


//DIFFERENT OPTIONS TO export modules
//module.exports = requestHandler;

/**
 * module.exports = {
 *  handler: requestHandler,
 *  someText: 'Some hard coded text!',
 * };
 */

/**
 * module.exports.handler = requestHandler;
 * module.exports.someText = 'Some hard coded text!'
 */

exports.handler = requestHandler;
exports.sometext = 'Some hard coded text!'

