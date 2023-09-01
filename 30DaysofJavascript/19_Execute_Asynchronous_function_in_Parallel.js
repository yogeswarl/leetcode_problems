// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

// promise resolves:

// When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  return new Promise((resolve,reject) => {
      if (functions.length === []){
          resolve([])
          return
      }
      const res = new Array(functions.length).fill(null)
      let resolvedCount = 0
      functions.forEach(async (el,idx) => {
          try {
              const subResult = await el()
              res[idx] = subResult
              resolvedCount++
              if(resolvedCount === functions.length) {
                  resolve(res)
              }
          } catch (err) {
              reject(err)
          }
      })
  })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/