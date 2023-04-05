type NestedNumbers = number | NestedNumbers[];
const nums: NestedNumbers = [1, 2, 2, [1, 23, [123, 123]]];

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;
