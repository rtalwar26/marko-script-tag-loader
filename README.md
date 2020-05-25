Webpack loader to remove \<script\> 
tags from a marko file

Now your marko files can be like this, when using webpack

```html
<script>
    import Framework7 from "Framework7";

    import config from "./routes";
    import Dom7 from "Dom7"
</script>

<div id="">
    <h1>hello</h1>
</div>

```

## Installation

```shell
npm install -d  marko-script-tag-loader
```
## Usage

Add following in your `webpack.config.js`

```javascript
{
 module: {
    rules: [
        {
        test: /\.marko$/,
        use: [

          { loader: "@marko/webpack/loader" },
          { loader: 'marko-script-tag-remover' }
        }
    ]
 }       

```
