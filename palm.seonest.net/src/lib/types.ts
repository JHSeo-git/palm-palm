// copilot 짱짱맨
export type OverrideProps<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
