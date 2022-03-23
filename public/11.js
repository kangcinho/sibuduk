(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_student_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/student/types */ "./resources/js/src/store/student/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// import BreadcrumbsTitle from '../../components/layout/breadcrumbs/BreadcrumbsTitle'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Data-Pribadi-Siswa-Index-Page',
  components: {
    // breadcrumbsTitle: BreadcrumbsTitle
    breadcrumbsTitle: function breadcrumbsTitle() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/layout/breadcrumbs/BreadcrumbsTitle */ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue"));
    },
    studentPage: function studentPage() {
      return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ../../components/student/Student */ "./resources/js/src/components/student/Student.vue"));
    }
  },
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Home',
        disabled: false,
        pathName: 'dashboard'
      }, {
        text: 'Data Pribadi Siswa',
        disabled: false,
        pathName: 'data_pribadi_siswa'
      }],
      menu: {
        isLoading: true,
        currentPage: 1
      },
      modal: {
        isModalOpen: false,
        idStudent: null,
        title: ''
      },
      search: {
        lists: [{
          text: "NIS",
          value: 'nis'
        }, {
          text: "NISN",
          value: 'nisn'
        }, {
          text: "Nama Siswa",
          value: 'fullname'
        }],
        valueList: 'nis',
        valueSearch: ''
      }
    };
  },
  created: function created() {
    this.getStudents();
  },
  computed: {
    students: function students() {
      return this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_0__["GETTERS_STUDENTS"]];
    },
    totalPage: function totalPage() {
      return this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_0__["GETTERS_TOTAL_PAGE"]];
    }
  },
  methods: {
    getStudents: function getStudents() {
      var _this = this;

      this.$store.dispatch(_store_student_types__WEBPACK_IMPORTED_MODULE_0__["ACTIONS_GET_STUDENT"], _objectSpread(_objectSpread({}, this.menu), {}, {
        param: this.search.valueList,
        value: this.search.valueSearch
      })).then(function (respon) {
        _this.menu.isLoading = false;
      })["catch"](function (err) {
        _this.$store.dispatch(notificationTypes.ACTIONS_MESSAGE, {
          message: err,
          color: 'red'
        });
      });
    },
    searchHandler: function searchHandler() {
      this.menu.isLoading = true;
      this.menu.currentPage = 1;
      this.getStudents();
    },
    editData: function editData(student, nameOfDeleteNote) {
      this.modal.idStudent = student.id;
      this.modal.isModalOpen = true;
      this.modal.title = "Data Pribadi Siswa: ".concat(student.fullname);
    }
  },
  watch: {
    'menu.currentPage': function menuCurrentPage(value) {
      this.menu.isLoading = true;
      this.getStudents();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "mx-3" },
    [
      _c("breadcrumbs-title", {
        attrs: {
          title: "Siswa",
          subtitle: "Data Pribadi Siswa",
          breadcrumbs: _vm.breadcrumbs
        }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "3" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.search.lists,
                  "item-text": "text",
                  "item-value": "value",
                  label: "Opsi Pencarian Berdasarkan"
                },
                model: {
                  value: _vm.search.valueList,
                  callback: function($$v) {
                    _vm.$set(_vm.search, "valueList", $$v)
                  },
                  expression: "search.valueList"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "9" } },
            [
              _c(
                "v-text-field",
                {
                  attrs: { label: "Pencarian Data Siswa", clearable: "" },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.searchHandler($event)
                    }
                  },
                  model: {
                    value: _vm.search.valueSearch,
                    callback: function($$v) {
                      _vm.$set(_vm.search, "valueSearch", $$v)
                    },
                    expression: "search.valueSearch"
                  }
                },
                [
                  _c(
                    "v-icon",
                    {
                      attrs: { slot: "append", color: "primary" },
                      on: { click: _vm.searchHandler },
                      slot: "append"
                    },
                    [_vm._v("mdi-magnify")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { elevation: "3" } },
        [
          _vm.menu.isLoading
            ? [
                _c(
                  "v-sheet",
                  { staticClass: "pa-3", attrs: { color: "grey lighten-4" } },
                  [
                    _c("v-skeleton-loader", {
                      staticClass: "mx-auto",
                      attrs: { type: "table" }
                    })
                  ],
                  1
                )
              ]
            : [
                _c(
                  "v-card-text",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "v-btn",
                      { attrs: { color: "primary" } },
                      [
                        _c("v-icon", { attrs: { left: "", dark: "" } }, [
                          _vm._v("mdi-plus")
                        ]),
                        _vm._v("\n          Siswa\n        ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.students.length > 0
                  ? _c(
                      "v-card-text",
                      [
                        _c("v-simple-table", {
                          attrs: { dense: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function() {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  NIS\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  NISN\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Nama\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Jenis Kelamin\n                "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.students, function(student) {
                                        return _c(
                                          "tr",
                                          {
                                            key: student.id,
                                            staticStyle: { cursor: "pointer" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editData(
                                                  student,
                                                  "name"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "td",
                                              { attrs: { width: "20%" } },
                                              [_vm._v(_vm._s(student.nis))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "20%" } },
                                              [_vm._v(_vm._s(student.nisn))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "50%" } },
                                              [_vm._v(_vm._s(student.fullname))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [_vm._v(_vm._s(student.gender))]
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            false,
                            2682919805
                          )
                        })
                      ],
                      1
                    )
                  : _c(
                      "v-card-text",
                      [
                        _c(
                          "v-alert",
                          { attrs: { border: "left", type: "warning" } },
                          [
                            _vm.search.valueSearch !== ""
                              ? _c("p", [
                                  _vm._v(
                                    "Pencarian " +
                                      _vm._s(
                                        _vm.search.lists.filter(function(list) {
                                          return (
                                            list.value == _vm.search.valueList
                                          )
                                        })[0].text
                                      ) +
                                      ": "
                                  ),
                                  _c("strong", [
                                    _vm._v(
                                      " " + _vm._s(_vm.search.valueSearch) + " "
                                    )
                                  ]),
                                  _vm._v("  Tidak Ditemukan")
                                ])
                              : _c("p", [_vm._v("Data Siswa Tidak Tersedia")])
                          ]
                        )
                      ],
                      1
                    ),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-pagination", {
                      attrs: {
                        length: _vm.totalPage,
                        circle: "",
                        "total-visible": "7"
                      },
                      model: {
                        value: _vm.menu.currentPage,
                        callback: function($$v) {
                          _vm.$set(_vm.menu, "currentPage", $$v)
                        },
                        expression: "menu.currentPage"
                      }
                    })
                  ],
                  1
                )
              ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.modal.isModalOpen,
            callback: function($$v) {
              _vm.$set(_vm.modal, "isModalOpen", $$v)
            },
            expression: "modal.isModalOpen"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline grey lighten-2" }, [
                _vm._v("\n        " + _vm._s(_vm.modal.title) + "\n      ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("student-page", {
                    attrs: { pIdStudent: _vm.modal.idStudent }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.modal.isModalOpen = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/data-pribadi-siswa/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/pages/data-pribadi-siswa/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=26e30ad9& */ "./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/data-pribadi-siswa/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=26e30ad9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-pribadi-siswa/index.vue?vue&type=template&id=26e30ad9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26e30ad9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);