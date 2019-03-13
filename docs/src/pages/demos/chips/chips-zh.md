---
title: React Chip组件
components: Chip
---
# Chips

<p class="description">Chips 是用来表示输入框、属性或操作的紧凑元素。</p>

[Chips](https://material.io/design/components/chips.html) 允许用户输入信息、进行选择、筛选内容或触发操作。

Chips虽然被包含在这里作为独立组件，但更常见的作法是用在上下文中作为一种用户输入，因此本篇演示的内容并不会显示具体的上下文关联内容。

## 纸片

以下是纸片的一个例子, 使用了图片， SVG 图标，“字母” (和字符串) 来作为 头像。

- 定义了`onClick` 属性的纸片会在获得焦点、鼠标悬浮、单击时有外观的变化。
- 定义了`onDelete` 属性的纸片将显示一个删除图标, 并在鼠标悬浮时有外观的变化。

{{"demo": "pages/demos/chips/Chips.js"}}

### 描边纸片

描边纸片提供了另一种风格。

{{"demo": "pages/demos/chips/OutlinedChips.js"}}

## 纸片组

下面是一个通过数组呈现多个纸片的示例。 删除纸片会将其从纸片组的队列中删除。 请注意，因为没有定义`onClick` 属性，所以这些纸片在被点击或触碰时可以获取焦点，但没有立体和阴影变化。

{{"demo": "pages/demos/chips/ChipsArray.js"}}

## 纸片演练

{{"demo": "pages/demos/chips/ChipsPlayground.js", "hideHeader": true}}