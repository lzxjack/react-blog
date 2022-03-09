## 博客 2.0 开发中...

改用自己搭建的脚手架，并重构优化代码。

## 预计使用的 hooks

- useReques
- usePagination：
- useMount：只在组件初始化时执行的 Hook。
- useUnmount：在组件卸载（unmount）时执行的 Hook。
- useSetState：用法与 class 组件的 this.setState 基本一致。
- useBoolean
- useDebounce
- useThrottle
- useSafeState：用法与 React.useState 完全一样，但是在组件卸载后异步回调内的 setState 不再执行，避免因组件卸载后更新状态而导致的内存泄漏。
- useGetState：给 React.useState 增加了一个 getter 方法，以获取当前最新值。
- useUpdateEffect：忽略首次执行，只在依赖更新时执行。
- useAsyncEffect：useEffect 支持异步函数。
- useDeepCompareEffect
- useEventListener：优雅的使用 addEventListener。
- useTitle
- useLatest：返回当前最新值的 Hook，可以避免闭包问题。
- useMemoizedFn：持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。
