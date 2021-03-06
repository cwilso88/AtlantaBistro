webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewLeftClicked = function reviewLeftClicked(state, actions) {

  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {

  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview + 1
    }
  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Topimg = __webpack_require__(11);

var _Topimg2 = _interopRequireDefault(_Topimg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Topimg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'ATLANTA BISTRO RESTAURANT',
  phone: '(404) 512 - 0978',
  location: 'Atlanta, Georgia'

};

var menuInfo = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, fried bacon, soft bun, and soy sauce.',
  price: '17'
}, {
  title: 'Midtown Atlanta Chicken Grill',
  description: 'Spicy grilled chicken marinated in a honey glaze.',
  price: '21'
}, {
  title: 'Quinoa and Apple Cider Dumplins',
  description: 'Tasty quinoa sauteed in delicious sweet applie cider.',
  price: '15'
}];

var reviewsInfo = [{
  company: 'The Food Network',
  review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masterclass',
  highlight: '"Best Restaurant in the Atlanta area!"'
}, {
  company: 'Gayot',
  review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
  author: 'Robert Sietsema',
  authorInfo: 'Winner Of The Chef Masterclass',
  highlight: '"High quality food and modern decor!"'
}, {
  company: 'Roadfood',
  review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
  author: 'Josh Ozersky',
  authorInfo: 'Winner Of The Chef Masterclass',
  highlight: '"Top notch service and food!"'
}, {
  company: 'BlackboardEats',
  review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
  author: 'Kenji Lopez-Alt',
  authorInfo: 'Winner Of The Chef Masterclass',
  highlight: '"Luxury Bistro dining with a twist!"'
}, {
  company: 'HBO',
  review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
  author: 'Ben Leventhal',
  authorInfo: 'Winner Of Atlanta Best Chef',
  highlight: '"Amazing Dining experience for all!"'
}];

var quoteInfo = [{
  author: 'Henry',
  quote: '"Food Has The Power To Bring Everyone Together. No Matter What Culture, People Get Together To Eat."'
}, {
  author: 'Amanda',
  quote: '"Life is uncertain. Eat dessert first."'
}, {
  author: 'David',
  quote: '"In wine there is wisdom, in beer there is strength, in water there is bacteria."'
}, {
  author: 'Beth',
  quote: '"You don’t need a silver fork to eat good food."'
}, {
  author: 'Julia',
  quote: '"The only time to eat diet food is while you’re waiting for the steak to cook."'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  menuInfo: menuInfo,
  quoteInfo: quoteInfo,
  reviewsInfo: reviewsInfo,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", className: "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "ContactUs-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "box" },
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: "address" },
              " 3309 Hamilton Road ",
              (0, _hyperapp.h)("br", null),
              "Sandy Springs, GA 30303"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@atlantabistro.com" },
                "info@atlantabistro.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              "(404) 512-0978"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Sunday - Friday ",
              (0, _hyperapp.h)("br", null),
              " from 11am - 2:00pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Sunday - Saturday: ",
              (0, _hyperapp.h)("br", null),
              " from 5pm - 11:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "nav",
        { className: "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { className: "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-official", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://instagram.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://pintrest.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-pinterest-square", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "copyright" },
        "\xA9 2018 Copyright ",
        (0, _hyperapp.h)("br", null),
        " This site was happily made by Chasity De La Cruz"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { className: "story-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "When we opened our doors in 2005, we wanted to recreate the upscale bistros we knew growing up in the city of Atlanta where people could meet and enjoy light fare with a cup of coffee or a glass of wine. We did not anticipate that American Bistro would become an instant success and develop such a devoted following. We quickly responded by creating a more traditional restaurant setting and expanding the offerings from the kitchen but we never lost sight of our vision."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            "\"Atlanta Bistro is the best in town. The service and food are always amazing.\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Shelly Green"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)("div", { className: "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0,#000 100%), url("https://static1.squarespace.com/static/5395130de4b09ddb699acb37/t/57d5ad1d3e00be430c583ca9/1473621283973/Ingredients+for+cooking+and+empty+cutting+board+on+an+old+wooden+table.+Food+background+with+copyspace.jpg?format=1500w")'
      } },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Food has the power to bring everyone together.  No matter what culture, people get together to eat."'
      ),
      (0, _hyperapp.h)(
        'span',
        { className: 'author' },
        ' - Henry'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company);
  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { className: "reviews-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].highlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].author
        ),
        "- ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.globalState.reviewStatus.currentReview == state.globalState.reviewsInfo.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-8 side-img" },
          (0, _hyperapp.h)("img", { src: "https://image.freepik.com/free-photo/chef-with-his-arms-crossed-over-white-background_1368-2792.jpg" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { className: "arrows" },
            (0, _hyperapp.h)("i", { onClick: leftClickBTN, "class": "fa fa-arrow-left " + (state.globalState.reviewStatus.currentReview > 0 ? 'ready' : '') }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN, "class": "fa fa-arrow-right " + (state.globalState.reviewStatus.currentReview == state.globalState.reviewsInfo.length - 1 ? '' : 'ready') })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.globalState.menuInfo.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { className: "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { className: "box" },
          (0, _hyperapp.h)(
            "div",
            { className: "box-img" },
            (0, _hyperapp.h)(
              "div",
              { className: "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { className: "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { className: "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "specialMenu-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Summer"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", className: "link" },
        "View full menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Topimg;

var _hyperapp = __webpack_require__(0);

function Topimg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { className: "booking" },
          "Reserve Table Directly"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "(770) 756-1391"
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "hours" },
          "Opening Hours ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Mon - Fri:"
          ),
          " 9am - 9pm",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Sat - Sun:"
          ),
          " 11am - 10pm"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _globalState = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: { actions: _actions.actions },
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);