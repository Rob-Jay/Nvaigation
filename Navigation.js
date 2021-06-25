import React from 'react';
import Card from './ui/Card';
import ImageCard from './ui/ImageCard';
import add from './images/add.png'


import './Navigation.css';


function Navigation() {
  return (
    <Card className="main-card">

      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lectus sit amet lorem fringilla fermentum. Praesent tortor augue, ullamcorper sit amet euismod at, elementum quis augue. Vivamus imperdiet mi sed ligula aliquam fringilla. Maecenas in rhoncus augue. Morbi arcu justo, sodales non nisl nec, feugiat semper nulla. Suspendisse nec purus pulvinar, laoreet ipsum quis, tincidunt orci. Donec eget dui porta nulla venenatis dictum. Nulla nisi erat, vestibulum a aliquet nec, vehicula laoreet dolor.
        Nunc pellentesque consectetur tellus, sit amet mollis leo suscipit vel. Vivamus id tellus sem. Maecenas condimentum enim magna, sed gravida risus cursus vitae. Curabitur varius facilisis purus, a lobortis ante cursus vitae. Cras porttitor, nunc et ultrices congue, eros neque pharetra dui, ac molestie mi quam id nunc. Nam scelerisque nisi enim, vel varius nulla efficitur eu. Ut eget lectus nisl. Morbi congue pharetra malesuada. Duis placerat, est eu consectetur finibus, neque ex congue nulla, ac ultricies elit orci quis lacus. Nam dictum neque a luctus faucibus. Pellentesque a felis vitae risus ullamcorper iaculis. Sed pulvinar pretium faucibus. Phasellus rutrum quam faucibus dui cursus, id porta leo blandit. Nullam consectetur augue nec purus accumsan pretium. Duis condimentum nisl lectus, eu bibendum massa dictum sit amet.
        Nulla dictum finibus neque sit amet aliquam. Phasellus nunc turpis, elementum non dui in, semper pharetra nisi. Curabitur leo nibh, blandit elementum neque ac, posuere eleifend orci. Praesent eget nibh ut orci porttitor mattis sed non turpis. Vivamus euismod nunc in mauris pellentesque, eget finibus orci faucibus. Curabitur dapibus ultricies nunc sed imperdiet. Morbi a sollicitudin dui, ullamcorper gravida ipsum. Quisque quis fermentum tellus. Sed nunc dolor, posuere sit amet turpis eu, pellentesque lobortis odio. Cras tincidunt lorem nec facilisis posuere. Donec sed lectus quam. Etiam commodo orci sed mauris convallis feugiat. Nullam dapibus molestie mi sit amet bibendum. Vestibulum rutrum, quam et vestibulum luctus, ante est convallis risus, et laoreet risus quam vel nisi. Aenean tempor dapibus sem vel vehicula. Nullam nulla turpis, porta quis augue ac, venenatis dictum risus.
        Duis vulputate metus massa, eu bibendum orci rutrum vel. Quisque nisl nisl, efficitur ut purus sit amet, iaculis placerat ipsum. Donec mollis consequat orci, nec ultricies diam lacinia in. Sed auctor metus eget magna placerat, ac venenatis ex malesuada. Vestibulum egestas porta velit vitae luctus. Nunc pulvinar turpis eget fermentum tempor. Quisque nulla ligula, suscipit a mattis eget, malesuada vitae orci. Nam elit nibh, tincidunt eget sapien sed, sagittis blandit ipsum. Etiam ut fringilla diam. Sed consectetur at felis et luctus.
        Ut ac lacinia tortor. Fusce congue sit amet erat a sodales. Nullam ullamcorper leo non viverra elementum. Nulla facilisi. Quisque convallis suscipit purus vel bibendum. Sed nec varius turpis. Quisque sodales gravida eros in faucibus. Suspendisse potenti. Nunc sed congue nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi blandit, dui a pulvinar euismod, tortor leo mattis arcu, bibendum vulputate ligula quam sit amet neque.</p>

      <h4 className="sub-heading">Track your emissions below</h4>
      <div class="container">
        <div class="flex-child magenta">
          <ImageCard className="image-card">
            <h3>Transport</h3>
            <input type="image" src={add} alt="add" className="add-btn" />
          </ImageCard>

        </div>

        <div class="flex-child green">
          <ImageCard className="image-card">
            <h3>Food</h3>
            <input type="image" src={add} alt="add" />
          </ImageCard>

        </div>

      </div>
    </Card>

  )
}
export default Navigation;