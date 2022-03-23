(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Breadcrumbs-Title-Component',
  props: ['title', 'subtitle', 'breadcrumbs']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-row", { staticClass: "justify-space-between" }, [
    _c("p", { staticClass: "text-h5 font-weight-bold" }, [
      _vm._v(_vm._s(_vm.title) + " "),
      _c("span", { staticClass: "text-subtitle-2 text--secondary" }, [
        _vm._v(_vm._s(_vm.subtitle))
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-h5 font-weight-bold d-xs-none" },
      [
        _c("v-breadcrumbs", {
          staticClass: "ma-0 pa-0",
          attrs: { items: _vm.breadcrumbs, divider: ">" },
          scopedSlots: _vm._u([
            {
              key: "item",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-breadcrumbs-item",
                    {
                      attrs: {
                        to: { name: item.pathName },
                        disabled: item.disabled
                      }
                    },
                    [_vm._v("\n          " + _vm._s(item.text) + "\n        ")]
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadcrumbsTitle.vue?vue&type=template&id=eb30c688& */ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688&");
/* harmony import */ var _BreadcrumbsTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbsTitle.vue?vue&type=script&lang=js& */ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BreadcrumbsTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbsTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadcrumbsTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbsTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadcrumbsTitle.vue?vue&type=template&id=eb30c688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue?vue&type=template&id=eb30c688&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbsTitle_vue_vue_type_template_id_eb30c688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);