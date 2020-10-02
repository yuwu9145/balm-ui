### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI);
```

### Individual Usage

```scss
/* Included `ripple.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/directives/ripple/ripple';
```

```js
import vRipple from 'balm-ui/directives/ripple';

// `app`: Vue app
app.directive(vRipple.name, vRipple);
```