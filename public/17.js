(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_routing_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/routing_helper */ "./resources/js/src/helpers/routing_helper.js");
/* harmony import */ var _store_masterData_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/masterData/types */ "./resources/js/src/store/masterData/types.js");
/* harmony import */ var _store_notification_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification/types */ "./resources/js/src/store/notification/types.js");
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
  name: 'Master-Data-Index-Page',
  components: {
    // breadcrumbsTitle: BreadcrumbsTitle
    breadcrumbsTitle: function breadcrumbsTitle() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/layout/breadcrumbs/BreadcrumbsTitle */ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue"));
    }
  },
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Home',
        disabled: false,
        pathName: 'dashboard'
      }, {
        text: 'Import Data Master',
        disabled: false,
        pathName: 'master_data'
      }],
      menu: {
        isLoading: false
      },
      fileImport: {
        create_user: false,
        fileImport: '',
        isValid: true,
        rules: [function (value) {
          return !!value || 'File Ekspor Harus Dimasukan';
        }],
        menuList: [{
          text: 'Import Induk',
          value: 'import_induk'
        }, {
          text: 'Import Ledger',
          value: 'import_ledger'
        }],
        menuChoice: ''
      },
      modal: {
        confirmLeave: false,
        isLeaveRoute: false,
        targetRouteNext: ''
      }
    };
  },
  computed: {
    errors: function errors() {
      return this.$store.getters[_store_masterData_types__WEBPACK_IMPORTED_MODULE_1__["GETTERS_ERRORS"]];
    }
  },
  methods: {
    uploadFileInduk: function uploadFileInduk() {
      var _this = this;

      if (this.$refs.formMasterData.validate()) {
        this.menu.isLoading = true;
        var formData = new FormData();
        formData.append('file_excel', this.fileImport.fileImport);
        formData.append('create_user', this.fileImport.create_user);
        this.$store.dispatch(_store_masterData_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_UPLOAD_FILE"], formData).then(function (respon) {
          _this.menu.isLoading = false;

          _this.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_2__["ACTIONS_MESSAGE"], {
            message: respon,
            color: 'success'
          });
        })["catch"](function (err) {
          _this.menu.isLoading = false;
        });
      }
    },
    cancelUpload: function cancelUpload() {
      this.modal.isLeaveRoute = true;
      Object(_helpers_routing_helper__WEBPACK_IMPORTED_MODULE_0__["redirectRoute"])(this.modal.targetRouteNext);
    },
    fileInput: function fileInput(value) {
      this.fileImport.fileImport = value;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // console.log("MAU LEAVE")
    this.modal.targetRouteNext = to.name;

    if (this.menu.isLoading) {
      if (this.modal.isLeaveRoute) {
        this.$store.dispatch(_store_masterData_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_CLEAR_ERROR"]);
        next();
      } else {
        this.modal.confirmLeave = true;
      }
    } else {
      this.$store.dispatch(_store_masterData_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_CLEAR_ERROR"]);
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          title: "Data Master",
          subtitle: "Inport Data Master",
          breadcrumbs: _vm.breadcrumbs
        }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { xs: "12", sm: "12", md: "12", lg: "4", xl: "4" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    loading: _vm.menu.isLoading,
                    disabled: _vm.menu.isLoading
                  }
                },
                [
                  _c(
                    "v-card-text",
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.fileImport.menuList,
                          "item-text": "text",
                          "item-value": "value",
                          label: "Pilih Import"
                        },
                        model: {
                          value: _vm.fileImport.menuChoice,
                          callback: function($$v) {
                            _vm.$set(_vm.fileImport, "menuChoice", $$v)
                          },
                          expression: "fileImport.menuChoice"
                        }
                      }),
                      _vm._v(" "),
                      _vm.fileImport.menuChoice == "import_induk"
                        ? [
                            _c(
                              "v-form",
                              {
                                ref: "formMasterData",
                                attrs: { "lazy-validation": "" },
                                model: {
                                  value: _vm.fileImport.isValid,
                                  callback: function($$v) {
                                    _vm.$set(_vm.fileImport, "isValid", $$v)
                                  },
                                  expression: "fileImport.isValid"
                                }
                              },
                              [
                                _c("v-file-input", {
                                  attrs: {
                                    accept: ".xls, .xlsx",
                                    label: "Masukan File Import",
                                    rules: _vm.fileImport.rules
                                  },
                                  on: { change: _vm.fileInput }
                                }),
                                _vm._v(" "),
                                _c("v-checkbox", {
                                  attrs: { label: "Import Data User" },
                                  model: {
                                    value: _vm.fileImport.create_user,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.fileImport,
                                        "create_user",
                                        $$v
                                      )
                                    },
                                    expression: "fileImport.create_user"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      block: "",
                                      color: "primary",
                                      loading: _vm.menu.isLoading
                                    },
                                    on: { click: _vm.uploadFileInduk },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "loader",
                                          fn: function() {
                                            return [
                                              _vm._v(
                                                "\n                  Upload Sedang Diproses..\n                "
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      false,
                                      877648240
                                    )
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { left: "", dark: "" } },
                                      [_vm._v("mdi-cloud-upload")]
                                    ),
                                    _vm._v(
                                      "\n                Upload File Induk\n                "
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.fileImport.menuChoice == "import_ledger"
                        ? void 0
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.errors.length != 0 && !_vm.menu.isLoading
            ? _c(
                "v-col",
                { attrs: { xs: "12", sm: "12", md: "12", lg: "8", xl: "8" } },
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        loading: _vm.menu.isLoading,
                        disabled: _vm.menu.isLoading
                      }
                    },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("v-virtual-scroll", {
                            attrs: {
                              items: _vm.errors,
                              "item-height": 50,
                              height: _vm.$vuetify.breakpoint.height - 200
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c(
                                        "v-alert",
                                        {
                                          attrs: {
                                            dense: "",
                                            text: "",
                                            type: "warning"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "  " + _vm._s(item.error[0]) + " "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              1795924489
                            )
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "80%" },
          model: {
            value: _vm.modal.confirmLeave,
            callback: function($$v) {
              _vm.$set(_vm.modal, "confirmLeave", $$v)
            },
            expression: "modal.confirmLeave"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  "\n        Apa Anda Yakin Ingin Membatalkan Proses Upload ?\n      "
                )
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "Saat Anda Keluar Dari Halaman ini, Proses Upload Data akan dibatalkan dan Kemungkinan akan mengalami Error pada Databases"
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "success", text: "" },
                      on: {
                        click: function($event) {
                          _vm.modal.confirmLeave = false
                        }
                      }
                    },
                    [_vm._v("\n          Lanjutkan Proses Upload\n        ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "warning", text: "" },
                      on: { click: _vm.cancelUpload }
                    },
                    [_vm._v("\n          Iya Saya Batalkan Upload\n        ")]
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

/***/ "./resources/js/src/pages/master-data/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/pages/master-data/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e22cdc98& */ "./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/master-data/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/master-data/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e22cdc98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/master-data/index.vue?vue&type=template&id=e22cdc98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e22cdc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);