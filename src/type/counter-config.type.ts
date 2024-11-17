/**
 * @description
 */
export type CounterConfig<
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean,
> = boolean | {active?: CounterActive, description?: CounterDescription};
