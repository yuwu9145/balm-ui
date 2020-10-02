### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-textfield>` props with default value.
  UiTextfield: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiTextfieldComponents from 'balm-ui/components/textfield';

// `app`: Vue app
app.use(UiTextfieldComponents, {
  // Optional. Overwrite `<ui-textfield>` props with default value.
  UiTextfield: {
    // some props
  }
});
```