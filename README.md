# TypeScript Concepts — Interview Prep Guide

## Priority Legend

| Stars | Meaning |
|---|---|
| ⭐⭐⭐⭐⭐ | Asked in almost every TypeScript interview — know cold |
| ⭐⭐⭐⭐ | Very common, especially at mid/senior level |
| ⭐⭐⭐ | Common, good to know well |
| ⭐⭐ | Occasionally asked, nice to have |

## Quick Priority Overview

| Priority | Topics |
|---|---|
| ⭐⭐⭐⭐⭐ | Generics, Type Guards, Union & Intersection, Access Modifiers, Inheritance, Utility Types, Class basics, Object/Interface |
| ⭐⭐⭐⭐ | Abstraction, Polymorphism, Encapsulation, Function (overloads), Type Assertion, Constraint, Nullable/Unknown/Never, Spread & Rest, Optional Chaining |
| ⭐⭐⭐ | Enum, Static, Setter/Getter, Destructuring, Array/Tuple, as const, Mapped Types, Conditional Types |
| ⭐⭐ | Merge Sort (DSA, not TS-specific) |

---

## 1. `class.ts` — Class Basics ⭐⭐⭐⭐⭐

**Why it's needed:** A class is the foundation of OOP — a way to bundle data (properties) and behavior (methods) together. TypeScript classes build on top of ES6 JavaScript classes but add static typing.

**What it does:** Defines a template/blueprint from which you can create multiple objects (instances), each with its own independent state.

**How it works:** The `constructor` runs when an instance is created with `new`; properties and methods are bound to that instance via `this`. TypeScript type-checks everything at compile time, then transpiles down to plain JavaScript classes at runtime.

**Structure:**
```
class ClassName {
  property: Type;

  constructor(param: Type) {
    this.property = param;
  }

  methodName(): ReturnType {
    // ...
  }
}
```

**Interview Questions:**
- Difference between a class and an interface in TypeScript?
- What happens when you compile a TS class to JS (ES5 vs ES6 target)?
- Can a class implement multiple interfaces? Can it extend multiple classes?
- What is the difference between an instance method and a static class member?

---

## 2. `abstraction.ts` — Abstraction ⭐⭐⭐⭐

**Why it's needed:** To hide complex implementation details and expose only the essential features — the consumer only needs to know "what" to call, not "how" it works internally.

**What it does:** Uses `abstract` classes/methods to define a contract or blueprint that cannot be instantiated directly; subclasses are forced to implement the abstract methods.

**How it works:** At compile time, TypeScript blocks any attempt to instantiate an abstract class directly, and verifies that every subclass has overridden all the required abstract methods.

**Structure:**
```
abstract class BaseName {
  abstract methodName(): ReturnType;   // no body — must be implemented

  concreteMethod(): ReturnType {
    // has a body — inherited as-is
  }
}

class Derived extends BaseName {
  methodName(): ReturnType {
    // required implementation
  }
}
```

**Interview Questions:**
- Difference between abstraction and encapsulation?
- Can an abstract class have a constructor? Can it have implemented (non-abstract) methods?
- Why can't you instantiate an abstract class directly?
- Abstract class vs interface — when would you use which?

---

## 3. `accessModifier.ts` — Access Modifiers ⭐⭐⭐⭐⭐

**Why it's needed:** The main tool for implementing encapsulation — controlling which properties/methods can be seen or modified from outside the class.

**What it does:** Controls three levels of visibility — `public` (accessible from anywhere, the default), `private` (only accessible inside the declaring class), `protected` (accessible inside the class and its subclasses).

**How it works:** These are purely compile-time checks — JavaScript at runtime has no real concept of private/protected (aside from the native ES2022 `#private` field). The TS compiler enforces these rules, but the compiled JS output has no actual runtime restriction.

**Structure:**
```
class ClassName {
  public field1: Type;
  private field2: Type;
  protected field3: Type;

  public method1() {}
  private method2() {}
  protected method3() {}
}
```

**Interview Questions:**
- Are TypeScript's `private` members truly private at runtime?
- Difference between `private` and the native JavaScript `#private` field?
- What is `protected` used for that `private` can't do?
- What's the default access modifier if none is specified?

---

## 4. `encapsulation.ts` — Encapsulation ⭐⭐⭐⭐

**Why it's needed:** To protect internal state from uncontrolled direct access, so data isn't changed arbitrarily and the object's integrity is preserved.

**What it does:** Bundles data together with the logic that manipulates it inside a class, and limits exposure through controlled access (public methods / getters-setters).

**How it works:** `private`/`protected` fields are declared, and controlled `public` methods (or getters/setters) provide read/write access to those fields — direct property access from outside is blocked.

**Structure:**
```
class ClassName {
  private internalState: Type;

  public getState(): Type {
    return this.internalState;
  }

  public updateState(value: Type): void {
    // validation before mutating internalState
    this.internalState = value;
  }
}
```

**Interview Questions:**
- How is encapsulation different from abstraction (this comes up a LOT)?
- Why is direct property access considered bad practice in OOP?
- How do getters/setters support encapsulation?

---

## 5. `inheritence.ts` — Inheritance ⭐⭐⭐⭐⭐

**Why it's needed:** For code reuse — common behavior is written once in a base/parent class, then reused across multiple child classes without duplication.

**What it does:** Lets a class (child) inherit properties and methods from another class (parent), and optionally override them to provide its own behavior.

**How it works:** The `extends` keyword sets up a parent-child relationship; the child class's constructor must call `super()` to invoke the parent's constructor before accessing `this`. Overriding a method means the child's version runs at runtime (runtime polymorphism).

**Structure:**
```
class Parent {
  constructor(protected field: Type) {}

  method(): ReturnType {
    // base behavior
  }
}

class Child extends Parent {
  constructor(field: Type, private extra: Type) {
    super(field);
  }

  method(): ReturnType {
    // overridden behavior
  }
}
```

**Interview Questions:**
- Why must `super()` be called before using `this` in a derived class constructor?
- Does TypeScript support multiple inheritance? How do you work around that (mixins)?
- What is method overriding vs method overloading?
- Difference between inheritance and composition — which is generally preferred?

---

## 6. `polymorphism.ts` — Polymorphism ⭐⭐⭐⭐

**Why it's needed:** To run different behavior for different objects through the same method call/interface — code becomes flexible and extensible, and you can add new subclasses without changing existing code.

**What it does:** Lets you handle a collection of one reference type (e.g. `Shape[]`), but at actual runtime each object calls its own overridden method.

**How it works:** This is resolved at runtime (dynamic dispatch) — when the call happens, TypeScript/JS looks at the object's actual class and executes that class's version of the method, not the parent's.

**Structure:**
```
abstract class Base {
  abstract action(): ReturnType;
}

class VariantA extends Base {
  action(): ReturnType { /* variant A behavior */ }
}

class VariantB extends Base {
  action(): ReturnType { /* variant B behavior */ }
}

const items: Base[] = [new VariantA(), new VariantB()];
items.forEach(item => item.action()); // each runs its own version
```

**Interview Questions:**
- Difference between compile-time (overloading) and runtime (overriding) polymorphism?
- How does polymorphism improve code maintainability?
- Give a real-world example of polymorphism you've used.

---

## 7. `object.ts` — Object Types & Interfaces ⭐⭐⭐⭐⭐

**Why it's needed:** To specify the shape of a JavaScript object (which properties it will have, and what type), so compile-time catches typos or missing properties.

**What it does:** Creates a contract for what keys an object will hold and what type each key's value should be — using `interface` or `type`.

**How it works:** TypeScript uses structural typing — meaning an object is considered compatible with a type based on its shape matching, not its name (duck typing).

**Structure:**
```
interface Name {
  requiredProp: Type;
  optionalProp?: Type;
  [dynamicKey: string]: Type;   // index signature
}

type Alias = {
  requiredProp: Type;
};
```

**Interview Questions:**
- Difference between `interface` and `type` in TypeScript?
- What is structural typing vs nominal typing?
- Can you extend an interface? Can two interfaces merge (declaration merging)?
- What is an index signature and when do you use it?

---

## 8. `array.ts` — Arrays & Tuples ⭐⭐⭐

**Why it's needed:** To ensure a consistent element type inside an array, and to define a fixed-length, position-specific type when needed (via tuples).

**What it does:** `T[]` or `Array<T>` builds an array holding multiple elements of the same type; a tuple (`[string, number]`) builds an array with a fixed order and a fixed type per position.

**How it works:** At compile time, each element's type is checked according to its index; a tuple raises an error on a length or position mismatch, while a plain array only checks that all elements share the declared type.

**Structure:**
```
const arr: Type[] = [];
const arr2: Array<Type> = [];
const tuple: [Type1, Type2] = [value1, value2];
const readonlyArr: readonly Type[] = [];
```

**Interview Questions:**
- Difference between an array and a tuple?
- What does `readonly` array mean and when would you use it?
- How do you type a multidimensional array?

---

## 9. `destructuring.ts` — Destructuring ⭐⭐⭐

**Why it's needed:** Instead of repeatedly writing `.property` to pull values out of an array or object, destructuring extracts values directly into variables in one line — making code more concise and readable.

**What it does:** Assigns array elements or object properties directly to new variables, with optional default values or renaming.

**How it works:** The compiler destructures like pattern-matching — by position in an array, by key name in an object — and TypeScript infers the exact type of each destructured variable.

**Structure:**
```
const [first, second] = arrayValue;
const { key1, key2 } = objectValue;
const { key1: renamed, key2 = defaultValue } = objectValue;
const { nested: { innerKey } } = objectValue;
```

**Interview Questions:**
- How do you provide default values while destructuring?
- How do you rename a variable during object destructuring?
- Difference between destructuring an array vs an object?

---

## 10. `spreadandRestOp.ts` — Spread & Rest Operators ⭐⭐⭐⭐

**Why it's needed:** For copying or merging arrays/objects, or for passing/accepting a variable number of function arguments — helps you write in an immutable style while avoiding mutation.

**What it does:** **Spread (`...`)** expands an array/object into its individual elements/properties (used for copying or merging). **Rest (`...`)** does the opposite — collects multiple arguments/elements into a single array/object.

**How it works:** Spread produces a shallow copy (nested object/array references are still shared); a rest parameter sits at the end of a function signature and gathers all remaining arguments into an array.

**Structure:**
```
// spread
const merged = [...arr1, ...arr2];
const mergedObj = { ...obj1, ...obj2 };

// rest
function fn(first: Type, ...rest: Type[]) {}
const [head, ...tail] = arrayValue;
const { key1, ...restProps } = objectValue;
```

**Interview Questions:**
- Difference between spread and rest — they look the same (`...`) but do opposite things, explain.
- Does spread do a deep copy or shallow copy?
- How do you use rest parameters in a function with other fixed parameters?

---

## 11. `function.ts` — Functions & Overloads ⭐⭐⭐⭐

**Why it's needed:** To guarantee a function's parameter and return types, so calling it with the wrong argument is caught at compile time instead of crashing at runtime.

**What it does:** Lets you type parameters, return values, optional/default parameters, and declare multiple signatures (overloads) for the same function name.

**How it works:** Overloads declare multiple signatures above, followed by a single implementation below that typically uses broad types (like `any`) to handle all of them; TypeScript matches the caller's arguments against the correct signature for type checking.

**Structure:**
```
function fn(param1: Type1, param2?: Type2, param3: Type3 = defaultVal): ReturnType {}

const arrowFn = (param: Type): ReturnType => { /* ... */ };

// overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any { /* single implementation */ }
```

**Interview Questions:**
- How do function overloads work in TypeScript (compared to Java/C++)?
- Difference between optional (`?`) and default parameters?
- What is the `void` return type and how is it different from `undefined`?
- What are arrow functions and how do they differ in `this` binding from regular functions?

---

## 12. `generics.ts` — Generics ⭐⭐⭐⭐⭐

**Why it's needed:** To keep a function/class/interface reusable across different types without using `any` — `any` throws away type safety entirely, while generics preserve it.

**What it does:** Uses a "type parameter" (commonly `T`) that gets replaced with an actual type at the call site — the same code becomes reusable for different types.

**How it works:** At the call site, TypeScript either takes an explicit type argument (`Box<number>`) or infers it from the arguments. It's all resolved at compile time — generics don't exist at runtime (type erasure).

**Structure:**
```
function identity<T>(value: T): T { return value; }

class Container<T> {
  constructor(private value: T) {}
  get(): T { return this.value; }
}

function pair<T, U>(a: T, b: U): [T, U] { return [a, b]; }

const instance = new Container<Type>(value);
```

**Interview Questions:**
- Why use generics instead of `any`?
- How does TypeScript infer generic types automatically?
- What are generic constraints and why are they needed?
- Can you use multiple type parameters in a generic function?
- Are generics available at runtime? (No — type erasure)

---

## 13. `constraint.ts` — Generic Constraints ⭐⭐⭐⭐

**Why it's needed:** To impose a "minimum shape" on a generic type parameter, so specific properties/methods can be safely used inside that generic.

**What it does:** Uses the `extends` keyword to require that a generic `T` conforms to a specific interface/type's shape — only then can `T` be used freely inside the function.

**How it works:** At compile time, TypeScript checks whether the actual type passed as an argument satisfies that constraint; if not, it raises an error — if it does, it allows access to that property/method inside the generic.

**Structure:**
```
interface Constraint {
  requiredProp: Type;
}

function fn<T extends Constraint>(item: T): T {
  // item.requiredProp is safely accessible here
  return item;
}

function fnWithKeyof<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

**Interview Questions:**
- Why do you need constraints on generics?
- Example: how would you write a generic function that only works on objects with a `length` property?
- Can you use `keyof` with generic constraints?

---

## 14. `enum.ts` — Enums ⭐⭐⭐

**Why it's needed:** To define a named set of related constant values, so you can use a readable, self-documenting name instead of magic strings/numbers (like `"ACTIVE"` or `1`).

**What it does:** Builds a group of named constants (numeric or string-based) from which a single value can be selected.

**How it works:** A numeric enum auto-increments from 0 by default (and the compiled JS includes a reverse mapping object); a string enum requires an explicit value for every member. A `const enum` gets inlined at compile time, producing no runtime object at all.

**Structure:**
```
enum NumericEnum {
  Member1,
  Member2,
  Member3,
}

enum StringEnum {
  Member1 = "VALUE1",
  Member2 = "VALUE2",
}

const enum ConstEnum {
  Member1 = "VALUE1",
}
```

**Interview Questions:**
- Difference between numeric enum and string enum?
- What is a `const enum` and how is it different from a regular enum?
- What are the downsides of enums (bundle size, reverse mapping) — why do some teams prefer a union of string literals instead?

---

## 15. `static.ts` — Static Members ⭐⭐⭐

**Why it's needed:** To hold data/behavior that shouldn't differ per instance but should be shared/common across the entire class — like a counter or a utility function.

**What it does:** Binds a property/method to the class itself instead of any instance, so it can be accessed via the class name without ever calling `new`.

**How it works:** The `static` keyword makes that member exist as a single copy in memory, shared by all instances; it's accessed as `ClassName.member`, not `instance.member`.

**Structure:**
```
class ClassName {
  static staticProp: Type;
  static readonly CONSTANT: Type;

  static staticMethod(): ReturnType {
    return ClassName.staticProp;
  }
}

ClassName.staticMethod(); // called on the class, not an instance
```

**Interview Questions:**
- When would you use a static method over an instance method?
- Can static members access instance (non-static) properties directly? Why not?
- Real-world example of a static property (like a singleton counter or config).

---

## 16. `settergetter.ts` — Getters & Setters ⭐⭐⭐

**Why it's needed:** To let a property be used like a normal field while still running validation or extra logic on read/write — this preserves encapsulation while keeping the syntax clean.

**What it does:** `get` returns a computed value (looks like reading a property, but is actually a function call under the hood); `set` accepts a value, runs validation/processing, and updates internal state.

**How it works:** From the outside it looks like ordinary property access (`obj.value = 10`), but internally it's a method call — so custom validation logic runs right at the moment of assignment.

**Structure:**
```
class ClassName {
  private _field: Type;

  get field(): Type {
    return this._field;
  }

  set field(value: Type) {
    // validation
    this._field = value;
  }
}

instance.field = value;   // calls the setter
instance.field;           // calls the getter
```

**Interview Questions:**
- Why use getters/setters instead of public fields directly?
- Can a getter exist without a corresponding setter (read-only property)?
- How do getters/setters relate to encapsulation?

---

## 17. `questionMark.ts` — Optional Properties & Chaining ⭐⭐⭐⭐

**Why it's needed:** To handle properties/parameters that may not always be present, avoiding repeated `undefined` checks and preventing crashes.

**What it does:** `?` marks a property/parameter as optional (may not be present); `?.` (optional chaining) safely accesses deeply nested object properties — if any level along the way is `null`/`undefined`, the whole expression safely returns `undefined` instead of throwing an error.

**How it works:** Optional chaining checks at every `.` step whether the value on the left is `null`/`undefined` — if so, it immediately short-circuits and returns `undefined` without evaluating the rest of the chain.

**Structure:**
```
interface Type {
  optionalProp?: Type2;
}

function fn(required: Type, optional?: Type2) {}

value?.property;
value?.method?.();
value?.[dynamicKey];
value ?? fallbackValue;
```

**Interview Questions:**
- Difference between optional chaining (`?.`) and nullish coalescing (`??`)?
- How does optional chaining prevent runtime errors like "Cannot read property of undefined"?
- What's the difference between `age?: number` and `age: number | undefined`?

---

## 18. `nullableUnknownNever.ts` — null / undefined / unknown / never ⭐⭐⭐⭐

**Why it's needed:** To correctly type "value is absent" or "value is unknown" states, and to handle cases where a function never returns normally at all.

**What it does:** `null`/`undefined` — represent the absence of a value. `unknown` — could be any type, but must be narrowed before it can be used (the type-safe alternative to `any`). `never` — a type that never has a value at all (e.g. a function that always throws or loops forever).

**How it works:** With `unknown`, the TS compiler forces you to narrow the type (using `typeof`/`instanceof`, etc.) before performing any operation on it. `never` is typically used in exhaustiveness checking — verifying that every possible case has been handled.

**Structure:**
```
let value: unknown;
let empty: null;
let notAssigned: undefined;

function alwaysThrows(): never {
  throw new Error("message");
}

function nullable(): Type | null { /* ... */ }
```

**Interview Questions:**
- Difference between `any` and `unknown`?
- When is a function's return type `never`?
- What is exhaustiveness checking and how does `never` help with it?
- Difference between `null` and `undefined` in JS/TS?

---

## 19. `typeassertion.ts` — Type Assertion ⭐⭐⭐⭐

**Why it's needed:** For situations where the developer knows more about a value's type than the compiler can infer (e.g. DOM elements or API responses), and needs to tell the compiler "I know exactly what type this is."

**What it does:** Forces TypeScript to treat a value as a specific type, without performing any actual runtime conversion or check.

**How it works:** This is purely a compile-time way of "convincing" TS (`as Type` or `<Type>value`); no actual conversion happens at runtime — if the assertion is wrong, it can lead to a runtime crash.

**Structure:**
```
const value1 = (something as Type);
const value2 = (<Type>something);
const nonNull = value!;   // non-null assertion
```

**Interview Questions:**
- Difference between type assertion and type casting (like in Java/C++)?
- Why is type assertion considered "unsafe" if misused?
- Difference between `as` syntax and angle-bracket (`<Type>`) syntax — when can't you use angle brackets?
- What is the non-null assertion operator (`!`) and when should you avoid it?

---

## 20. `typeGuard.ts` — Type Guards ⭐⭐⭐⭐⭐

**Why it's needed:** To confirm (narrow) at runtime which specific type inside a union you're actually working with, so that type's specific properties/methods can be used safely.

**What it does:** Narrows a broader type (e.g. `string | number`) down to one specific, narrower type through a runtime check.

**How it works:** Using `typeof` (for primitives), `instanceof` (for class instances), `in` (for property existence checks), or a custom predicate function (`pet is Fish` — which declares its return type using the `is` keyword), the TS compiler synchronizes the runtime check with compile-time narrowing.

**Structure:**
```
if (typeof value === "string") { /* narrowed to string */ }
if (value instanceof ClassName) { /* narrowed to ClassName */ }
if ("propertyName" in value) { /* narrowed by property presence */ }

function isTypeA(value: TypeA | TypeB): value is TypeA {
  return (value as TypeA).uniqueProp !== undefined;
}
```

**Interview Questions:**
- What are the different ways to write a type guard in TypeScript?
- What is a "user-defined type guard" (`pet is Fish`) and how does the `is` keyword work?
- How does TypeScript narrow types inside an `if` block automatically?
- Difference between type guards and type assertions — which is safer and why?

---

## 21. `unionAndIntersec.ts` — Union & Intersection Types ⭐⭐⭐⭐⭐

**Why it's needed:** To handle a value that could be any one of several possible types (union), or to build a new type that combines all the features of multiple types at once (intersection).

**What it does:** **Union (`|`)** — a value can be any one of multiple possible types (an "OR" relationship). **Intersection (`&`)** — combines multiple types into one, so the resulting type has all the properties of every combined type (an "AND" relationship).

**How it works:** On a union type, TS only lets you access members/methods that exist on every possible type in the union, until you narrow it. On an intersection type, all the properties of the combined types get merged together — an object must satisfy every combined type's requirements.

**Structure:**
```
type UnionType = TypeA | TypeB | TypeC;

type IntersectionType = TypeA & TypeB;

// discriminated union
type Shape =
  | { kind: "circle"; radius: Type }
  | { kind: "square"; side: Type };
```

**Interview Questions:**
- Difference between union and intersection types with real examples?
- What is a discriminated union and why is it useful?
- How does TypeScript narrow a union type inside a switch statement?
- Can two conflicting types be intersected (e.g., `string & number`)? What happens?

---

## 22. `asConstant.ts` — as const ⭐⭐⭐

**Why it's needed:** To "lock" a value into its most specific (literal) and readonly type, so TypeScript treats it as its exact literal value instead of widening it to a broader type (like `string`).

**What it does:** Makes an array/object literal immutable and types each of its values as a literal type instead of widening them.

**How it works:** By default, TS widens something like `const colors = ["red","green"]` to `string[]`, but adding `as const` makes it `readonly ["red","green"]` — each element becomes a literal type, and the array becomes immutable (readonly).

**Structure:**
```
const values = [val1, val2, val3] as const;
const config = { key1: val1, key2: val2 } as const;

type DerivedUnion = (typeof values)[number];
```

**Interview Questions:**
- Why does TypeScript "widen" literal types by default, and how does `as const` prevent that?
- How can `as const` be combined with `typeof` to derive a union type from an array?
- What's the practical use case of `as const` in configuration objects?

---

## 23. `mapped.ts` — Mapped Types ⭐⭐⭐

**Why it's needed:** To systematically transform every property of an existing type to build a new one (e.g. making every property optional/readonly/nullable), without writing it out manually every time.

**What it does:** Loops over every key of a type (`[K in keyof T]`), applying a new modifier (optional, readonly) or a new value type to each key to generate a new type.

**How it works:** At compile time, `keyof T` produces a union of all the keys of an existing type, and then a new rule is applied to each key to build the new type — this is exactly the underlying mechanism behind utility types like `Partial` and `Readonly`.

**Structure:**
```
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type MyNullable<T> = { [K in keyof T]: T[K] | null };
```

**Interview Questions:**
- How would you implement your own version of `Partial<T>` using a mapped type?
- What does `keyof` do and how is it used inside mapped types?
- What are mapping modifiers (`+`/`-` with `readonly`/`?`) used for?

---

## 24. `conditional.ts` — Conditional Types ⭐⭐⭐

**Why it's needed:** To make decisions at the type level — one type depends on and varies based on another, just like `if/else` or a ternary works at runtime.

**What it does:** Checks a condition (`T extends U ? X : Y`) and picks one of two possible types.

**How it works:** At compile time, TS checks whether `T` is actually assignable to `U`; if so, the first branch's type is resolved, otherwise the second one is. The `infer` keyword lets you "extract" a new type from within the condition (e.g. pulling the inner type out of a `Promise`).

**Structure:**
```
type Conditional<T> = T extends ConditionType ? TrueType : FalseType;

type Unwrap<T> = T extends Promise<infer U> ? U : T;
```

**Interview Questions:**
- What does the `infer` keyword do inside a conditional type?
- How would you write a type to unwrap a `Promise<T>` to get `T`?
- What is a distributive conditional type?

---

## 25. `utilityType.ts` — Utility Types ⭐⭐⭐⭐⭐

**Why it's needed:** To perform very common type transformations (making things optional, readonly, picking or omitting specific properties) quickly using TypeScript's built-in generic types, instead of writing them by hand every time.

**What it does:** Builds new derived types from existing ones — e.g. `Partial<T>` (all optional), `Required<T>` (all required), `Readonly<T>` (all readonly), `Pick<T,K>` (keep specific keys), `Omit<T,K>` (drop specific keys), `Record<K,V>` (key-value map type), `ReturnType<T>` (extract a function's return type).

**How it works:** These are internally built using mapped types and conditional types (defined in TS's `lib.d.ts`) — meaning they're not "magic," they're just practical, ready-made applications of the earlier concepts (mapped + conditional types).

**Structure:**
```
Partial<T>
Required<T>
Readonly<T>
Pick<T, "key1" | "key2">
Omit<T, "key1" | "key2">
Record<KeyType, ValueType>
ReturnType<typeof fn>
Parameters<typeof fn>
```

**Interview Questions:**
- Name 5 utility types you use often and explain what each does.
- How would you implement `Pick<T, K>` or `Omit<T, K>` from scratch?
- Difference between `Partial<T>` and `Required<T>`?
- What does `Record<K, V>` do and when would you use it over an interface?

---

## 26. `mergeShort.ts` — Merge Sort (DSA, not TS-specific) ⭐⭐

**Why it's needed:** This isn't a TypeScript feature — it's a classic sorting algorithm that may come up in DSA/coding rounds (implemented in TypeScript), testing algorithmic thinking alongside TypeScript syntax knowledge.

**What it does:** Uses a divide-and-conquer approach — repeatedly splitting an array in half, sorting each part independently, then merging the sorted parts back together to sort the whole array.

**How it works:** The array is recursively split until each piece has a single element (trivially sorted), then two sorted pieces are compared and merged into one sorted piece — working bottom-up.

**Structure:**
```
function merge(left: number[], right: number[]): number[] { /* ... */ }

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = /* midpoint */;
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
```

**Interview Questions:**
- What is the time and space complexity of merge sort?
- Why is merge sort a stable sort?
- Compare merge sort vs quick sort — when would you prefer one over the other?
- Can you write merge sort iteratively instead of recursively?

---

## Overall Interview Priority Ranking (Top → Lower)

| Rank | Topic | Priority |
|---|---|---|
| 1 | Generics | ⭐⭐⭐⭐⭐ |
| 2 | Type Guards | ⭐⭐⭐⭐⭐ |
| 3 | Union & Intersection Types | ⭐⭐⭐⭐⭐ |
| 4 | Utility Types | ⭐⭐⭐⭐⭐ |
| 5 | Access Modifiers | ⭐⭐⭐⭐⭐ |
| 6 | Inheritance | ⭐⭐⭐⭐⭐ |
| 7 | Object Types / Interfaces | ⭐⭐⭐⭐⭐ |
| 8 | Class Basics | ⭐⭐⭐⭐⭐ |
| 9 | Abstraction | ⭐⭐⭐⭐ |
| 10 | Polymorphism | ⭐⭐⭐⭐ |
| 11 | Encapsulation | ⭐⭐⭐⭐ |
| 12 | Function & Overloads | ⭐⭐⭐⭐ |
| 13 | Type Assertion | ⭐⭐⭐⭐ |
| 14 | Generic Constraints | ⭐⭐⭐⭐ |
| 15 | Nullable / Unknown / Never | ⭐⭐⭐⭐ |
| 16 | Spread & Rest Operators | ⭐⭐⭐⭐ |
| 17 | Optional Chaining / `?` | ⭐⭐⭐⭐ |
| 18 | Enum | ⭐⭐⭐ |
| 19 | Static Members | ⭐⭐⭐ |
| 20 | Getter / Setter | ⭐⭐⭐ |
| 21 | Destructuring | ⭐⭐⭐ |
| 22 | Array & Tuple | ⭐⭐⭐ |
| 23 | `as const` | ⭐⭐⭐ |
| 24 | Mapped Types | ⭐⭐⭐ |
| 25 | Conditional Types | ⭐⭐⭐ |
| 26 | Merge Sort (DSA) | ⭐⭐ |

**Recommendation:** For interview prep, master the ⭐⭐⭐⭐⭐ topics first — be able to explain them in your own words, discuss edge cases, and know common gotchas. These are asked directly in most international interviews (FAANG-style and startups alike). Then move on to ⭐⭐⭐⭐, and finally the rest.
