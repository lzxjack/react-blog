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

## 遇到的问题

（1）自定义主题 antd 样式不满足，自定义 antd 样式

额外写的`.scss`会开启`module`模式，导致样式无法匹配，不生效。

解决：专门创建`*.custom.scss`后缀文件，创建单独的规则：

```js
{
  test: /\.custom.scss$/,
  use: [
    ...getCustomLoaders(), // 这里不开启module
    {
      loader: 'sass-loader',
      options: {
        sourceMap: isDevelopment
      }
    }
  ]
}
```

原先的规则要排除：

```js
{
  test: /\.scss$/,
  exclude: [/node_modules/, /\.custom.scss$/],
  use: [
    ...getCssLoaders(),
    {
      loader: 'sass-loader',
      options: {
        sourceMap: isDevelopment
      }
    }
  ]
}
```

（2）评论模块表情组件

点击表情，将表情插入到输入框中。由于两组件关系复杂，没使用`props`或`context`、`redux`的方案，使用了消息发布订阅机制。实现比较方便。

（3）点击表情插入到输入框相应的光标中

通过`onSelect`事件，不断保存光标位置，拿到表情后，插入到光标位置处。
