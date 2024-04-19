```js
ZodError: [
  {
    "code": "too_small",
    "minimum": 3,
    "type": "string",
    "inclusive": true,
    "exact": false,
    "message": "String must contain at least 3 character(s)",
    "path": [
      "content"
    ]
  }
]
    at get error [as error] (webpack-internal:///(rsc)/./node_modules/zod/lib/index.mjs:649:31)
    at ZodObject.parse (webpack-internal:///(rsc)/./node_modules/zod/lib/index.mjs:749:22)
    at createTaskCustom (webpack-internal:///(rsc)/./utilities/actions.js:53:35)
    at endpoint (webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2Fhome%2Fdaniel%2FDocuments%2FComputing%2FNext.js%2FNext.js14_John_Smilga_Udemy%2F01-nextjs-tutorial-javascript%2Futilities%2Factions.js%22%2C%5B%22getAllTasks%22%2C%22createTaskCustom%22%2C%22editTask%22%2C%22deleteTask%22%2C%22createTask%22%2C%22getTask%22%5D%5D%5D&__client_imported__=!:13:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:406
    at async t2 (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:38:6412)
    at async rS (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:41:1369)
    at async doRender (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:1378:30)
    at async cacheEntry.responseCache.get.routeKind (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:1539:28)
    at async DevServer.renderToResponseWithComponentsImpl (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:1447:28)
    at async DevServer.renderPageComponent (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:1844:24)
    at async DevServer.renderToResponseImpl (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:1882:32)
    at async DevServer.pipeImpl (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:895:25)
    at async NextNodeServer.handleCatchallRenderRequest (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/next-server.js:269:17)
    at async DevServer.handleRequestImpl (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/base-server.js:791:17)
    at async /home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/dev/next-dev-server.js:331:20
    at async Span.traceAsyncFn (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/trace/trace.js:151:20)
    at async DevServer.handleRequest (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/dev/next-dev-server.js:328:24)
    at async invokeRender (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/lib/router-server.js:174:21)
    at async handleRequest (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/lib/router-server.js:353:24)
    at async requestHandlerImpl (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/lib/router-server.js:377:13)
    at async Server.requestListener (/home/daniel/Documents/Computing/Next.js/Next.js14_John_Smilga_Udemy/01-nextjs-tutorial-javascript/node_modules/next/dist/server/lib/start-server.js:140:13) {
  issues: [
    {
      code: 'too_small',
      minimum: 3,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'String must contain at least 3 character(s)',
      path: [Array]
    }
  ],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)],
  errors: [
    {
      code: 'too_small',
      minimum: 3,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'String must contain at least 3 character(s)',
      path: [Array]
    }
  ]
}
```
