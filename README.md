## vue slider components

not use input[range], support ie9+

## Todo
## Install
````
npm install vue-drag-slider --save
````
## Run example
````
cd example/

# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run serve
````

## Usage
- html
````
<drag-slider class="drag-slider"></drag-slider>
````
- vue
````
import DragSlider from 'vue-drag-slider'
export default {
  components: {
    DragSlider
  }
}
// or
import DragSlider from 'vue-drag-slider'
Vue.component('drag-slider', DragSlider)
````
- css
````
.drag-slider {
  height: 10px;
  width: 255px;
  margin: 50px auto 0 auto;
}
````

## material link
- [Simple pure Javascript drag controller slider](https://stackoverflow.com/questions/14095880/simple-pure-javascript-drag-controller-slider)
  - [range-slider](https://github.com/tovic/range-slider)
  - [dragger demo](http://jsbin.com/dulifezi/2/edit?html,js,output)

- [dragdealer](https://github.com/skidding/dragdealer)
