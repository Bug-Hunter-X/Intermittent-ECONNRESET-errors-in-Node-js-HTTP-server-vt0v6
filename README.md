# Intermittent ECONNRESET Errors in Node.js HTTP Server

This repository demonstrates a common issue in Node.js HTTP servers where the server crashes intermittently with an 'ECONNRESET' error, particularly under heavy load.  The bug is related to improper error handling and resource management in the request handling logic.

## Bug Description

The provided `bug.js` file contains a simple HTTP server.  Under normal conditions, it functions correctly. However, when subjected to a significant number of concurrent requests, the server occasionally crashes with an `ECONNRESET` error. This error typically indicates that the client abruptly closed the connection before the server finished processing the request.

## Solution

The `bugSolution.js` demonstrates how to improve the server's robustness and prevent the `ECONNRESET` error by implementing proper error handling using `socket.on('error', ...)` and `request.on('error', ...)` events and also by ensuring that response is always ended even in case of errors, preventing resource leaks.