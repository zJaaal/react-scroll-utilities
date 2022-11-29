import getLinearValueFromOptions from "../../lib/utils/calculations/linear/getLinearValueFromOptions";
import { describe, it, expect } from "vitest";
import getValueFromPercentage from "../../lib/utils/calculations/misc/getValueFromPercentage";
const start = 0;
const end = 500;
const delay = 50;
const duration = 50;
const height = 1000;
const defaultOptions = {
  delay: 0,
  duration: 100,
  anchor: "middle" as "middle",
};

describe("getLinearValueFromOptions function", () => {
  it("should return the start value as default", () => {
    let result = getLinearValueFromOptions({
      y: -500,
      startValue: start,
      endValue: end,
      height: height,
      options: defaultOptions,
    });

    expect(result, `should return ${start} as default value`).toBe(start);
  }),
    it("should return a different value when changing the Y value", () => {
      let result = getLinearValueFromOptions({
        y: 0,
        startValue: start,
        endValue: end,
        height: height,
        options: defaultOptions,
      });

      expect(
        result,
        `should return ${
          end / 2
        } because we setted Y to the half of the component`
      ).toBe(end / 2);
    }),
    it("should return a different value after the delay value", () => {
      let result = getLinearValueFromOptions({
        y: 0,
        startValue: start,
        endValue: end,
        height: height,
        options: { ...defaultOptions, delay: delay },
      });

      expect(
        result,
        `should return ${start} because we delayed the change of the value until the half of the component`
      ).toBe(start);

      let resultTwo = getLinearValueFromOptions({
        y: 300,
        startValue: start,
        endValue: end,
        height: height,
        options: { ...defaultOptions, delay: delay },
      });

      expect(
        resultTwo == start,
        `should return a different value after the half of the component`
      ).toBeFalsy();
    }),
    it("should be at the end value before the end of the component when the duration is changed", () => {
      let result = getLinearValueFromOptions({
        y: 0,
        startValue: start,
        endValue: end,
        height: height,
        options: { ...defaultOptions, duration: duration },
      });

      expect(
        result,
        `should return ${end} because we changed the duration to the half of the component`
      ).toBe(end);
    }),
    it("should be at the end value after the half of the component at half of the time when duration and delay are changed to 50", () => {
      //y = 250, because we are delaying to the half (0) and half of the time (250) so at 250 it should be at 500
      let result = getLinearValueFromOptions({
        y: 250,
        startValue: start,
        endValue: end,
        height: height,
        options: { ...defaultOptions, duration, delay },
      });

      expect(
        result,
        `should return ${end} because we changed the duration to the half of the component`
      ).toBe(end);
    }),
    it("should also handle random duration and delay", () => {
      //gen random values

      let randomDuration = Math.floor(Math.random() * 100);
      let randomDelay = Math.floor(Math.random() * 100);

      //same calculations as in the inside the function to know in what position it should be the end value

      let delayPosition = getValueFromPercentage(height, randomDelay);
      let durationPosition =
        getValueFromPercentage(height - delayPosition, randomDuration) +
        delayPosition -
        height / 2;

      //Math round to eliminate decimals and float points. It always give a value between 499.999999X and 500.0000000X some random "X" number at the end

      let result = Math.round(
        getLinearValueFromOptions({
          y: durationPosition,
          startValue: start,
          endValue: end,
          height: height,
          options: {
            ...defaultOptions,
            duration: randomDuration,
            delay: randomDelay,
          },
        })
      );

      expect(result, `should return ${end}`).toBe(end);
    });
});
