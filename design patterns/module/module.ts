/**
 * Defines an interface named `Module` that has a `private` property of type `string`.
 */
interface Module {
  private: string;
}

/**
 * Defines an anonymous function that defines a `privMessage` variable that is an object with a `private`
 * property with the value "Hello world this is a private message". It also defines a function named
 * `sayPrivate` that logs the value of the `private` property of `privMessage` to the console.
 *
 * Returns an object that has a public function named `sayPublic` that calls `sayPrivate`.
 */
const myModule = (() => {
  const privMessage: Module = {
    private: "Hello world this is a private message",
  };

  const sayPrivate = () => {
    // console.log(privMessage.private);
    return privMessage.private;
  };

  return {
    sayPublic: () => sayPrivate(),
  };
})();

/**
 * Calls the `sayPublic` function on the `myModule` object, which in turn calls the `sayPrivate` function
 * and logs the value of the `private` property of `privMessage` to the console.
 */

// myModule.sayPublic();

export { myModule };
