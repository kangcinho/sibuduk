(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_score_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/score/types */ "./resources/js/src/store/score/types.js");
/* harmony import */ var _store_notification_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/notification/types */ "./resources/js/src/store/notification/types.js");
/* harmony import */ var _store_student_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/student/types */ "./resources/js/src/store/student/types.js");
/* harmony import */ var _store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/rombelCategory/types */ "./resources/js/src/store/rombelCategory/types.js");
/* harmony import */ var _store_mapel_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/mapel/types */ "./resources/js/src/store/mapel/types.js");
/* harmony import */ var _components_modal_ModalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/ModalForm */ "./resources/js/src/components/modal/ModalForm.vue");
/* harmony import */ var _components_modal_ModalSearchForeign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modal/ModalSearchForeign */ "./resources/js/src/components/modal/ModalSearchForeign.vue");
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
  name: 'Nilai-Index-Page',
  components: {
    // breadcrumbsTitle: BreadcrumbsTitle
    breadcrumbsTitle: function breadcrumbsTitle() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/layout/breadcrumbs/BreadcrumbsTitle */ "./resources/js/src/components/layout/breadcrumbs/BreadcrumbsTitle.vue"));
    },
    ModalForm: _components_modal_ModalForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalSearchForeign: _components_modal_ModalSearchForeign__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Home',
        disabled: false,
        pathName: 'dashboard'
      }, {
        text: 'Daftar Nilai Siswa',
        disabled: false,
        pathName: 'data_nilai'
      }],
      menu: {
        isLoading: true,
        currentPage: 1
      },
      search: {
        lists: [{
          text: "NIS Siswa",
          value: 'student.nis'
        }, {
          text: "Tahun Ajaran",
          value: 'rombelCategory.season.period'
        }, {
          text: "Angka Semester",
          value: 'rombelCategory.semester.num'
        }, {
          text: "Kategori Rombel",
          value: 'rombelCategory.name'
        }],
        valueList: 'student.nis',
        valueSearch: '',
        valueDispatch: ''
      },
      modal: {
        title: "Data Nilai",
        width: '100%',
        isNewData: true,
        isModalOpen: false,
        nameOfDeleteNote: '',
        btnLoading: false,
        forms: [{
          isShow: false,
          type: 'text',
          name: 'id',
          label: 'ID',
          value: '',
          maxlength: 255,
          rules: []
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'student_id',
          label: 'Cari Data Siswa*',
          textValue: '',
          searchingFor: 'student',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Data Siswa Tidak Boleh Kosong';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'rombel_category_id',
          label: 'Cari Kategori Rombel*',
          textValue: '',
          searchingFor: 'rombelCategory',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Kategori Rombel Tidak Boleh Kosong';
          }, function (value) {
            if (!value) {
              return false;
            }

            return value.length <= 255 || 'Karakter Kategori Rombel Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'mapel_id',
          label: 'Cari Mata Pelajaran*',
          textValue: '',
          searchingFor: 'mapel',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Mata Pelajaran Tidak Boleh Kosong';
          }, function (value) {
            if (!value) {
              return false;
            }

            return value.length <= 255 || 'Mata Pelajaran Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'pengetahuan',
          label: 'Nilai Pengetahuan*',
          value: '0',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Nilai Pengetahuan Tidak Boleh Kosong';
          }, function (value) {
            if (!value) {
              return false;
            }

            return value.length <= 255 || 'Nilai Pengetahuan Harus Kurang dari 255 Karakter';
          } // value => {
          //   const pattern = /^\d+$/
          //   return pattern.test(value) || 'Nilai Pengetahuan Harus Angka'
          // },
          // value => (value >= 0 && value <=255) || 'Nilai Pengetahuan Harus Direntang 0-255',
          ]
        }, {
          isShow: true,
          type: 'text',
          name: 'keterampilan',
          label: 'Nilai Keterampilan*',
          value: '0',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Nilai Keterampilan Tidak Boleh Kosong';
          }, function (value) {
            if (!value) {
              return false;
            }

            return value.length <= 255 || 'Nilai Keterampilan Harus Kurang dari 255 Karakter';
          } // value => {
          //   const pattern = /^\d+$/
          //   return pattern.test(value) || 'Nilai Keterampilan Harus Angka'
          // },
          // value => (value >= 0 && value <=255) || 'Nilai Keterampilan Harus Direntang 0-255',
          ]
        }, {
          isShow: true,
          type: 'text',
          name: 'sikap',
          label: 'Nilai Sikap*',
          value: '0',
          maxlength: 255,
          rules: [function (value) {
            return !!value || 'Nilai Sikap Tidak Boleh Kosong';
          }, function (value) {
            if (!value) {
              return false;
            }

            return value.length <= 255 || 'Nilai Sikap Harus Kurang dari 255 Karakter';
          } // value => {
          //   const pattern = /^\d+$/
          //   return pattern.test(value) || 'Nilai Sikap Harus Angka'
          // },
          // value => (value >= 0 && value <=255) || 'Nilai Sikap Harus Direntang 0-255',
          ]
        }, {
          isShow: true,
          type: 'textarea',
          name: 'internal_note',
          label: 'Catatan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Catatan Nilai Ekstra Harus Kurang dari 255 Karakter';
          }]
        }]
      },
      modalSearch: {
        isModalOpen: false,
        page: {
          currentPage: 1
        },
        ui: {
          title: "",
          search: {
            lists: [],
            valueList: '',
            valueSearch: ''
          }
        },
        table: {
          header: [],
          body: []
        },
        searchResult: [],
        searchingFor: ''
      }
    };
  },
  created: function created() {
    this.getScore();
  },
  computed: {
    scores: function scores() {
      return this.$store.getters[_store_score_types__WEBPACK_IMPORTED_MODULE_0__["GETTERS_SCORES"]];
    },
    totalPage: function totalPage() {
      return this.$store.getters[_store_score_types__WEBPACK_IMPORTED_MODULE_0__["GETTERS_TOTAL_PAGE"]];
    },
    students: function students() {
      return this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_2__["GETTERS_STUDENTS"]] ? this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_2__["GETTERS_STUDENTS"]] : [];
    },
    pageStudents: function pageStudents() {
      return this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_2__["GETTERS_TOTAL_PAGE"]] ? this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_2__["GETTERS_TOTAL_PAGE"]] : 0;
    },
    mapels: function mapels() {
      return this.$store.getters[_store_mapel_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_MAPELS"]] ? this.$store.getters[_store_mapel_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_MAPELS"]] : [];
    },
    pageMapels: function pageMapels() {
      return this.$store.getters[_store_mapel_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_TOTAL_PAGE"]] ? this.$store.getters[_store_mapel_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_TOTAL_PAGE"]] : 0;
    },
    rombelCategories: function rombelCategories() {
      return this.$store.getters[_store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_ROMBEL_CATEGORIES"]] ? this.$store.getters[_store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_ROMBEL_CATEGORIES"]] : [];
    },
    pageRombelCategories: function pageRombelCategories() {
      return this.$store.getters[_store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_TOTAL_PAGE"]] ? this.$store.getters[_store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_TOTAL_PAGE"]] : 0;
    }
  },
  watch: {
    'menu.currentPage': function menuCurrentPage(value) {
      this.menu.isLoading = true;
      this.getScore();
    }
  },
  methods: {
    getScore: function getScore() {
      var _this = this;

      this.$store.dispatch(_store_score_types__WEBPACK_IMPORTED_MODULE_0__["ACTIONS_GET_SCORE"], _objectSpread(_objectSpread({}, this.menu), {}, {
        param: this.search.valueList,
        value: this.search.valueSearch
      })).then(function (respon) {
        _this.menu.isLoading = false;
      })["catch"](function (err) {
        _this.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: err,
          color: 'red'
        });
      });
    },
    searchHandler: function searchHandler() {
      this.menu.isLoading = true;
      this.menu.currentPage = 1;
      this.getScore();
    },
    modalClose: function modalClose() {
      this.modal.isModalOpen = false;
      this.modal.isNewData = true;
      this.modal.btnLoading = false;
    },
    modalOpen: function modalOpen() {
      this.modal.isModalOpen = true;
    },
    modalSearchOpen: function modalSearchOpen(searchingFor) {
      this.modalSearch.searchingFor = searchingFor;
      this.modalSearch.page.currentPage = 1;

      if (searchingFor == "student") {
        this.modalSearch.ui.title = "Pencarian Data Siswa";
        this.modalSearch.ui.search.lists = [{
          text: "NIS Siswa",
          value: 'nis'
        }, {
          text: "NISN Siswa",
          value: 'nisn'
        }, {
          text: "Nama Siswa",
          value: 'fullname'
        }];
        this.modalSearch.ui.search.valueList = 'nis';
        this.modalSearch.table.header = ['NIS', 'NISN', 'Nama Siswa'];
        this.modalSearch.table.body = ['nis', 'nisn', 'fullname'];
        this.modalSearch.ui.search.valueDispatch = _store_student_types__WEBPACK_IMPORTED_MODULE_2__["ACTIONS_GET_STUDENT"];
      } else if (searchingFor == "mapel") {
        this.modalSearch.ui.title = "Pencarian Data Mata Pelajaran";
        this.modalSearch.ui.search.lists = [{
          text: "Nama Mata Pelajaran",
          value: 'name'
        }];
        this.modalSearch.ui.search.valueList = 'name';
        this.modalSearch.ui.search.valueDispatch = _store_mapel_types__WEBPACK_IMPORTED_MODULE_4__["ACTIONS_GET_MAPEL"]; // this.modalSearch.searchResult = this.seasons;

        this.modalSearch.table.header = ['Nama Mapel', 'Alias', 'KKM', 'Catatan'];
        this.modalSearch.table.body = ['name', 'alias', 'kkm', 'internal_note'];
      } else if (searchingFor == 'rombelCategory') {
        this.modalSearch.ui.title = "Pencarian Data Kategori Rombel";
        this.modalSearch.ui.search.lists = [{
          text: "Nama Jenis Rombel",
          value: 'name'
        }, {
          text: "Nama Wali",
          value: 'wali_name'
        }, {
          text: "Inisial Jurusan",
          value: 'department.alias'
        }, {
          text: "Tahun Ajaran",
          value: 'season.period'
        }, {
          text: "Angka Semester",
          value: 'semester.num'
        }];
        this.modalSearch.ui.search.valueList = 'name';
        this.modalSearch.ui.search.valueDispatch = _store_rombelCategory_types__WEBPACK_IMPORTED_MODULE_3__["ACTIONS_GET_ROMBEL_CATEGORY"];
        this.modalSearch.table.header = ['Tahun Ajaran', 'Semester', 'Nama Jurusan', 'Nama Jenis Rombel', 'Nama Wali'];
        this.modalSearch.table.body = [['season', 'period'], ['semester', 'name'], ['department', 'name'], 'name', 'wali_name'];
      }

      this.modalSearch.isModalOpen = true;
    },
    modalSearchClose: function modalSearchClose() {
      this.modalSearch.isModalOpen = false;
      this.modalSearch.ui.search.valueSearch = '';
    },
    modalSearchActionHandler: function modalSearchActionHandler() {
      this.$store.dispatch(this.modalSearch.ui.search.valueDispatch, {
        currentPage: this.modalSearch.page.currentPage,
        param: this.modalSearch.ui.search.valueList,
        value: this.modalSearch.ui.search.valueSearch
      });
    },
    modalSearchChoiceValue: function modalSearchChoiceValue(value) {
      var searchingFor = this.modalSearch.searchingFor;
      this.modal.forms.map(function (form) {
        if (form.type == 'textSearch') {
          if (form.searchingFor == searchingFor) {
            form.value = value.id;

            if (searchingFor == 'student') {
              form.textValue = "".concat(value.nis, " - ").concat(value.fullname);
            } else if (searchingFor == 'mapel') {
              form.textValue = value.name;
            } else if (searchingFor == 'rombelCategory') {
              form.textValue = value.name;
            }
          }
        }
      });
      this.modalSearch.ui.search.valueSearch = '';
    },
    clearValue: function clearValue(refsFormModal) {
      this.modal.forms.map(function (form) {
        form.value = '';

        if (form.type == 'textSearch') {
          form.textValue = '';
        }
      });
      refsFormModal.resetValidation();
      this.modalClose();
    },
    editData: function editData(score, nameOfDeleteNote) {
      var _this2 = this;

      // console.log(score);
      this.modal.forms.map(function (form) {
        if (form.type == 'textSearch') {
          form.value = score[form.name];

          if (form.name == 'student_id') {
            form.textValue = score.student.nis + ' - ' + score.student.fullname;
            _this2.modal.nameOfDeleteNote = score.student.nis + ' - ' + score.student.fullname;
          } else if (form.name == 'mapel_id') {
            form.textValue = score.mapel.name;
          } else if (form.name == 'rombel_category_id') {
            form.textValue = score.rombel_category.name;
          }
        } else {
          form.value = score[form.name];
        }
      }); // console.log(this.modal.forms);

      this.modal.isNewData = false;
      this.modal.isModalOpen = true;
    },
    fetchAllData: function fetchAllData() {
      var dataSend = {};
      this.modal.forms.map(function (form) {
        dataSend[form.name] = form.value;
      });
      return dataSend;
    },
    saveData: function saveData(refsFormModal) {
      var _this3 = this;

      this.modal.btnLoading = true;
      var dataSend = this.fetchAllData();
      delete dataSend['id'];
      this.$store.dispatch(_store_score_types__WEBPACK_IMPORTED_MODULE_0__["ACTIONS_POST_SCORE"], dataSend).then(function (respon) {
        _this3.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: respon,
          color: 'success'
        });

        _this3.clearValue(refsFormModal);

        _this3.modal.btnLoading = false;
      })["catch"](function (err) {
        _this3.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: err,
          color: 'red'
        });

        _this3.modal.btnLoading = false;
      });
    },
    updateData: function updateData(refsFormModal) {
      var _this4 = this;

      this.modal.btnLoading = true;
      var dataSend = this.fetchAllData();
      this.$store.dispatch(_store_score_types__WEBPACK_IMPORTED_MODULE_0__["ACTIONS_PUT_SCORE_ID"], dataSend).then(function (respon) {
        _this4.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: respon,
          color: 'success'
        });

        _this4.clearValue(refsFormModal);

        _this4.modal.btnLoading = false;
      })["catch"](function (err) {
        _this4.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: err,
          color: 'red'
        });

        _this4.modal.btnLoading = false;
      });
    },
    deleteData: function deleteData(refsFormModal) {
      var _this5 = this;

      this.modal.btnLoading = true;
      var dataSend = this.fetchAllData();
      this.$store.dispatch(_store_score_types__WEBPACK_IMPORTED_MODULE_0__["ACTIONS_DELETE_SCORE_ID"], dataSend).then(function (respon) {
        _this5.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: respon,
          color: 'success'
        });

        _this5.clearValue(refsFormModal);

        _this5.modal.btnLoading = false;
      })["catch"](function (err) {
        _this5.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_MESSAGE"], {
          message: err,
          color: 'red'
        });

        _this5.clearValue(refsFormModal);

        _this5.modal.btnLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          title: "Nilai Siswa",
          subtitle: "Daftar Nilai Siswa",
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
                  attrs: { label: "Pencarian Data Nilai", clearable: "" },
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
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.modalOpen }
                      },
                      [
                        _c("v-icon", { attrs: { left: "", dark: "" } }, [
                          _vm._v("mdi-plus")
                        ]),
                        _vm._v("\n          Nilai\n        ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.scores.length > 0
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
                                            "\n                  Tahun Ajaran\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Semester\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Kategori Rombel\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  NIS\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Siswa\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Mapel\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  P\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  K\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  S\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                  Catatan\n                "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.scores, function(score) {
                                        return _c(
                                          "tr",
                                          {
                                            key: score.id,
                                            staticStyle: { cursor: "pointer" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editData(
                                                  score,
                                                  "anonym"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    score.rombel_category.season
                                                      .period
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    score.rombel_category
                                                      .semester.name
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    score.rombel_category.name
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(score.student.nis)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "20%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(score.student.fullname)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "10%" } },
                                              [_vm._v(_vm._s(score.mapel.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-right",
                                                attrs: { width: "5%" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(score.pengetahuan)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-right",
                                                attrs: { width: "5%" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(score.keterampilan)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-right",
                                                attrs: { width: "5%" }
                                              },
                                              [_vm._v(_vm._s(score.sikap))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { width: "15%" } },
                                              [
                                                _vm._v(
                                                  _vm._s(score.internal_note)
                                                )
                                              ]
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
                            3352966479
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
                              : _c("p", [_vm._v("Data Nilai Tidak Tersedia")])
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
      _c("modal-form", {
        attrs: {
          pTitle: _vm.modal.title,
          pWidth: _vm.modal.width,
          pIsNewData: _vm.modal.isNewData,
          pIsModalOpen: _vm.modal.isModalOpen,
          pForms: _vm.modal.forms,
          pActCloseModal: _vm.modalClose,
          pActClearValue: _vm.clearValue,
          pActSaveData: _vm.saveData,
          pActUpdateData: _vm.updateData,
          pActDeleteData: _vm.deleteData,
          pNameDeleteNote: _vm.modal.nameOfDeleteNote,
          pActSearchModalOpen: _vm.modalSearchOpen,
          pIsLoading: _vm.modal.btnLoading
        }
      }),
      _vm._v(" "),
      _c("modal-search-foreign", {
        attrs: {
          pWidth: "80%",
          pIsModalOpen: _vm.modalSearch.isModalOpen,
          pActCloseModal: _vm.modalSearchClose,
          pTitle: _vm.modalSearch.ui.title,
          pSearchList: _vm.modalSearch.ui.search,
          pActSearchHandler: _vm.modalSearchActionHandler,
          pSearchResult:
            _vm.modalSearch.searchingFor == "student"
              ? _vm.students
              : _vm.modalSearch.searchingFor == "rombelCategory"
              ? _vm.rombelCategories
              : _vm.mapels,
          pPageSearchResult:
            _vm.modalSearch.searchingFor == "student"
              ? _vm.pageStudents
              : _vm.modalSearch.searchingFor == "rombelCategory"
              ? _vm.pageRombelCategories
              : _vm.pageMapels,
          pCurrentPage: _vm.modalSearch.page,
          pTableContent: _vm.modalSearch.table,
          pActSearchChoiceValue: _vm.modalSearchChoiceValue
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/data-nilai/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/pages/data-nilai/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6e679c8d& */ "./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/data-nilai/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-nilai/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6e679c8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/data-nilai/index.vue?vue&type=template&id=6e679c8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e679c8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);