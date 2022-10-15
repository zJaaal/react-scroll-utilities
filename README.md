# React Scroll (Beta)

React Scroll is a Lightweight library to track scroll events like, proximity to components, direction of scroll and render a component if it's on screen sight. I'll be adding more features and improving the functionality. I'm also open to read any request or change that you think that would be a good addition. This library only supports vertical scroll at the moment.

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

This hook lets you know how far is the screen from the component, it returns negative and positive values, where 0 is the top limit of the screen (when you scroll down your component ( out of sight ), proximity will be on negatives values) and 2 is the bottom limit of the screen (when you scroll up your component ( out of sight ), proximity will be more than 2), so your component is on screen if the proximity value is between 0 and 2, were 1 is approximately the center of the screen.

### Usage

This hook only take one argument that should be a ref to an HTML Element. This hook won't work if ScrollWatcher is not implemented.

#### Example

```js
//TypeScript
function Example() {
  const ref = useRef < HTMLDivElement > null;

  const proximity = useProximity(ref);

  return <div ref={ref}>{"proximity: " + proximity}</div>;
}

//JavaScript
function Example() {
  const ref = useRef(null);

  const proximity = useProximity(ref);

  return <div ref={ref}>{"proximity: " + proximity}</div>;
}
```

## Render Component

This component implements the useProximity hook, and will only render your component if proximity is on an acceptable value (between 0 and 2). So you can use it to add animations to your components on render, like an entry transition.

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

This hooks returns the current direction of the scroll. It returns an string that can be "UP" or "DOWN", its default value is "DOWN".

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

This lib provides an enum for TypeScript users, it just has two properties at the moment: Directions.up and Directions.down, that returns the value of "UP" and "DOWN", you can use it as helper for useDirection hook.
