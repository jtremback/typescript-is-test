import { assertType } from "typescript-is";

const object: any = 42;
assertType<number>(object).toFixed(2); // "6.00"

try {
  const asString = assertType<string>(object); // throws error: object is not a string
  asString.toUpperCase(); // never gets here
} catch (error) {
  console.log("caught error: ", error);
}
