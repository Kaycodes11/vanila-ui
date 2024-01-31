By default, inline elements (or if used display: "inline") :: margin and padding won't be applicable on it even if i add manually



# To control (adding space i.e. pdading and leaving space i.e. margin ) an inline element, wrap it by block element

```HTML
<div style="margin: 10px;">inline element</div>

```

# or using display: inline-block (to allow the inline element have margin and padding)

```HTML
<div style="display: inline-block;">inline element</div>

```