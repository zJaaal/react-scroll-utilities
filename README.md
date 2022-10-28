# React Scroll Utilities (Beta)

React Scroll Utilities is a Lightweight library to track scroll events like, proximity to components, direction of scroll and render a component if it's on screen sight. I'll be adding more features and improving the functionality. I'm also open to read any request or change that you think that would be a good addition.


## Installation

You will need React ++16.8 to make this library work, since it use hooks as it's main construction.

You only need to do:  
``` 
npm i react-scroll-utilities 
or 
yarn add react-scroll-utilities
```

## ScrollWatcher Component

This component works as a context to read the scroll event.

### Usage

You only need to render this component on the top level of your app, it provides the necessary information for the library to work.

### Example

```js
// App.jsx / Main.jsx or App.tsx / Main.tsx

<ScrollWatcher>
  <YourRouterLib>
    <YourThemeProvider>
      <YourAppEntryPoint />
    </YourThemeProvider>
  </YourRouterLib>
</ScrollWatcher>
```

## useProximity hook

This hook lets you know how far is the screen from the component, it returns an object with two properties: x and y. Which values represents the proximity the component has to the center of the current viewport as a float value. For Y the acceptable value where the component is on sigth is between 0 and 2. For X the acceptable value where the component is on sigth is between 0 and 3.

### Usage

This hook only take one argument that should be a ref to an HTML Element. This hook won't work if ScrollWatcher is not implemented.

#### Example

```js
//TypeScript
function Example() {
  const ref = useRef<HTMLDivElement>(null);

  //I'm destructuring the object but you can easily use it without destructuring
  const { x, y } = useProximity(ref);

  return (
    <div ref={ref}>
      <div>{"X proximity: " + x}</div>
      <div>{"Y proximity: " + y}</div>
    </div>
  );
}

//JavaScript
function Example() {
  const ref = useRef(null);

  //I'm destructuring the object but you can easily use it without destructuring
  const { x, y } = useProximity(ref);

  return (
    <div ref={ref}>
      <div>{"X proximity: " + x}</div>
      <div>{"Y proximity: " + y}</div>
    </div>
  );
}
```

## Render Component

This component implements the useProximity hook, and will only render your component if proximity is on an acceptable value (between 0 and 2 for Y and between 0 and 3 for X). So you can use it to add animations to your components on render, like an entry transition.

### Usage

This component needs a React Children to work, it also accepts custom styles, this component inherits the parent height by default, in case you need to modify its height you can overwrite it by passing inline styles. This component won't work if ScrollWatcher is not implemented.

### Example

```js
//Some JSX...

<Render
  style={
    {
      //Here you can add your custom styles if needed
    }
  }
>
  <YourComponent className="some-animation-class" />
</Render>

//The rest of your JSX...
```

## useDirection hook

This hooks returns the current direction of the scroll. It returns an string that can be "UP", "DOWN", "RIGHT" or "LEFT", its default value is "DOWN".

### Usage

The only requirement in order to use it, is to make the right implementation of ScrollWatcher. It doesn't take any arguments at the time. You can use this hook in combination of useProximity to make different animations using the direction of the scroll as reference. You can go to src/test-components/BackgroundChange.tsx to see and example of a background that reacts to the scroll and direction.

### Example

```js
function Example() {
  const direction = useDirection();

  useEffect(() => {
    switch (direction) {
      case "UP": {
        // Do something
        break;
      }
      case "DOWN": {
        //Do something else
        break;
      }
      case "RIGHT": {
        // Do something
        break;
      }
      case "LEFT": {
        //Do something else
        break;
      }
    }
  }, [direction]);

  return (
    <div>
      {/*
      // Some JSX
      */}
    </div>
  );
}
```

## Directions enum

This lib provides an enum for TypeScript users, it just has four properties at the moment: Directions.up, Directions.down, Directions.right and Directions.left that returns the value of "UP", "DOWN" "RIGHT" and "LEFT", you can use it as helper for useDirection hook.

# Animations Components

## Circle Component

This component is a Circle that draws itself in response of the scroll event, it will start to draw when its on sight, any other way it will stand still at it's initial state.

## Usage

Just be sure that ScrollWatcher is at the top level of your app, any other way this component will throw an error.

## Props


|       prop      |                                                                                     usage                                                                                    |     type     | default value |                                            example values                                            | exceptions                                                                                                  |
|:---------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------:|:-------------:|:----------------------------------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------|
| backgroundColor |                                                         Color of the background to match  the color of the container                                                         |    string    |    "white"    |                        "#F323F1", "violet", "skyblue", "rgb(255, 153, 213)"...                       | No exceptions, if you pass something else it won´t work,  since it won't be a valid color                   |
|      color      |                                                                                  Line color                                                                                  |    string    |     "red"     |                        "#F323F1", "violet", "skyblue", "rgb(255, 153, 213)"...                       | No exceptions, if you pass something else it won't work,  since it won't be a valid color                   |
|    clockwise    |                                                                             Direction of the draw                                                                            |    boolean   |      true     |                                              true, false                                             | No exceptions, if you pass something else it will work with the  truthy/falsy JS logic                      |
|      speed      |                                                                             Speed of the drawing                                                                             |    number    |       8       |                                           1.2, 3, 19, 5...                                           | speed should be greater than 0, in other case it will throw an  exception                                   |
|      stroke     |                                                                          Width of the line in pixels                                                                         |    number    |       2       |                                              1, 24, 3...                                             | stroke should be greater than 0, in other case it will throw an exception                                   |
|      radius     |                                                                        Radius of the circle in pixels                                                                        |    number    |      200      |                                            100, 50, 21...                                            | radius should be greater than 0, in other case it will throw an  exception                                  |
|     children    |                                                                Children component to render  inside the circle                                                               | ReactElement |   undefined   | ``` <SomeComponent/> or <div>Hello world</div>``` | If you use something else as children, expect an error from React.                                          |
|   startDegree   |                                     Initial state of the line in degrees,  it can start with some portion of  the circle already drawed                                      |    number    |       0       |                                 90, 180, 270, 45, 60, 75, 21.2, 3...                                 | startDegree should be less than endDegree, in other case it will  throw an exception                        |
|    endDegree    |                                      Final state of the line in degrees,  to prevent the line from drawing  at some point of the circle                                      |    number    |      360      |                                     90, 283, 180, 213, 270, 34.2                                     | endDegree should be greater than startDegree, in other case it will throw an exception                      |
|      rotate     | Initial state of the line in degrees, you can  set the start of the line at 90° instead  of 0°. This won't draw the circle,  it will move the starting position of the line  |    number    |       0       |                                 78, 90, 100, 80, 170, 45, 21.3, 56...                                | if you pass something else that's not a number, it won't work  since it's not a valid degree (at the time). |


## Example

This will render a circle that has a radius of 400 pixels, a line width of 4 pixels and will draw really slow.

```js
//Some JSX...

<Circle radius={400} stroke={4} speed={2} />

//The rest of your JSX...
```

## Rectangle Component

This component is a Rectangle that draws itself in response of the scroll event, it will start to draw when its on sight, any other way it will stand still at it's initial state.

## Usage

Just be sure that ScrollWatcher is at the top level of your app, any other way this component will throw an error.

## Props

|       prop      |                                                                                     usage                                                                                    |     type     | default value |                                            example values                                            | exceptions                                                                                                  |
|:---------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------:|:-------------:|:----------------------------------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------|
| backgroundColor |                                                         Color of the background to match  the color of the container                                                         |    string    |    "white"    |                        "#F323F1", "violet", "skyblue", "rgb(255, 153, 213)"...                       | No exceptions, if you pass something else it won´t work,  since it won't be a valid color                   |
|      color      |                                                                                  Line color                                                                                  |    string    |     "red"     |                        "#F323F1", "violet", "skyblue", "rgb(255, 153, 213)"...                       | No exceptions, if you pass something else it won't work,  since it won't be a valid color                   |
|    clockwise    |                                                                             Direction of the draw                                                                            |    boolean   |      true     |                                              true, false                                             | No exceptions, if you pass something else it will work with the  truthy/falsy JS logic                      |
|      speed      |                                                                             Speed of the drawing                                                                             |    number    |       8       |                                           1.2, 3, 19, 5...                                           | speed should be greater than 0, in other case it will throw an  exception                                   |
|      stroke     |                                                                          Width of the line in pixels                                                                         |    number    |       2       |                                              1, 24, 3...                                             | stroke should be greater than 0, in other case it will throw an exception                                   |
|      radius     |                                                                        Radius of the circle in pixels                                                                        |    number    |      200      |                                            100, 50, 21...                                            | radius should be greater than 0, in other case it will throw an  exception                                  |
|     children    |                                                                Children component to render  inside the circle                                                               | ReactElement |   undefined   | ```<SomeComponent/> or <div>Hello world</div>``` | If you use something else as children, expect an error from React.                                          |
|   startDegree   |                                     Initial state of the line in degrees,  it can start with some portion of  the circle already drawed                                      |    number    |       0       |                                 90, 180, 270, 45, 60, 75, 21.2, 3...                                 | startDegree should be less than endDegree, in other case it will  throw an exception                        |
|    endDegree    |                                      Final state of the line in degrees,  to prevent the line from drawing  at some point of the circle                                      |    number    |      360      |                                     90, 283, 180, 213, 270, 34.2                                     | endDegree should be greater than startDegree, in other case it will throw an exception                      |
|      rotate     | Initial state of the line in degrees, you can  set the start of the line at 90° instead  of 0°. This won't draw the circle,  it will move the starting position of the line  |    number    |       0       |                                 78, 90, 100, 80, 170, 45, 21.3, 56...                                | if you pass something else that's not a number, it won't work  since it's not a valid degree (at the time). |

## Example

This will render a rectangle that has a height of 400px , a width of 100px, a line width of 5 pixels and will draw really fast.

```js
//Some JSX...

<Rectangle height={400} width={100} stroke={5} speed={12} />

//The rest of your JSX...
```

## DynamicBackground Component

Work in progress...
