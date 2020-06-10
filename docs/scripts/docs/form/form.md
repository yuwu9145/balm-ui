```html
<ui-form>
  <template #default="{ actionClass }">
    <ui-form-field>
      <label></label>
      <!-- awesome form item 1 -->
    </ui-form-field>
    <ui-form-field>
      <label></label>
      <!-- awesome form item 2 -->
    </ui-form-field>
    <ui-form-field :class="actionClass">
      <ui-button raised></ui-button>
    </ui-form-field>
  </template>
</ui-form>
```

### `<ui-form>` Types

- `0`: `'horizontal'`
- `1`: `'vertical'`

#### Props

| Name                | Type           | Default | Description                                             |
| ------------------- | -------------- | ------- | ------------------------------------------------------- |
| `type`              | string, number | `0`     | Mandatory. Text divider types.                          |
| `labelTopAligned`   | boolean        | `false` | Styles the form item with a top vertical-aligned label. |
| `labelRightAligned` | boolean        | `false` | Styles the form item with a right text-aligned label.   |

> `labelTopAligned` and `labelRightAligned` are applicable only for `horizontal` type form.

#### Slots

| Name      | Props         | Description                                                 |
| --------- | ------------- | ----------------------------------------------------------- |
| `default` | `actionClass` | The default slot holds the form items and can contain HTML. |

### `<ui-form-field>`

#### Props

| Name           | Type    | Default | Description                                                            |
| -------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `nowrap`       | boolean | `false` | Force the text to stay on a single line and ellipse the overflow text. |
| `alignEnd`     | boolean | `false` | Position the input after the label.                                    |
| `spaceBetween` | boolean | `false` | Align the input and label space between.                               |

#### Slots

| Name      | Props | Description                                                |
| --------- | ----- | ---------------------------------------------------------- |
| `default` |       | The default slot holds the form item and can contain HTML. |