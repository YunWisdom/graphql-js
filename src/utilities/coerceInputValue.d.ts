import { GraphQLInputType } from '../type/definition';
import { GraphQLError } from '../error/GraphQLError';

type OnErrorCB = (
  path: ReadonlyArray<string | number>,
  invalidValue: unknown,
  error: GraphQLError,
) => void;

/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
export function coerceInputValue(
  inputValue: unknown,
  type: GraphQLInputType,
  onError?: OnErrorCB,
): unknown;

/**
 * Coerces the default value of an input field or argument.
 */
export function coerceDefaultValue(
  withDefaultValue: {
    readonly type: GraphQLInputType;
    readonly defaultValue: unknown;
  },
  onError?: OnErrorCB,
): unknown;
