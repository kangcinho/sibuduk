(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Form-Control-Component',
  props: ['pForms', 'pActSearchModalOpen'],
  data: function data() {
    return {
      isValid: true,
      menuDate: false
    };
  },
  methods: {},
  computed: {
    comFormsNonArea: function comFormsNonArea() {
      return this.pForms.filter(function (form) {
        return form.isShow && form.type != "textarea" && form.type != "textSearch";
      });
    },
    comFormsArea: function comFormsArea() {
      return this.pForms.filter(function (form) {
        return form.isShow && form.type == "textarea";
      });
    },
    comFormsTextSearch: function comFormsTextSearch() {
      return this.pForms.filter(function (form) {
        return form.isShow && form.type == "textSearch";
      });
    },
    isOddNonArea: function isOddNonArea() {
      return this.comFormsNonArea.length % 2 == 1;
    },
    isOddArea: function isOddArea() {
      return this.comFormsArea.length % 2 == 1;
    },
    isOddTextSearch: function isOddTextSearch() {
      return this.comFormsTextSearch.length % 2 == 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/Student.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/student/Student.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./resources/js/src/components/student/FormControl.vue");
/* harmony import */ var _store_student_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/student/types */ "./resources/js/src/store/student/types.js");
/* harmony import */ var _store_notification_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification/types */ "./resources/js/src/store/notification/types.js");
/* harmony import */ var _store_religion_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/religion/types */ "./resources/js/src/store/religion/types.js");
/* harmony import */ var _store_country_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/country/types */ "./resources/js/src/store/country/types.js");
/* harmony import */ var _components_modal_ModalSearchForeign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/ModalSearchForeign */ "./resources/js/src/components/modal/ModalSearchForeign.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Student-Component',
  components: {
    formControl: _FormControl__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalSearchForeign: _components_modal_ModalSearchForeign__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ['pIdStudent'],
  computed: {
    student: function student() {
      return this.$store.getters[_store_student_types__WEBPACK_IMPORTED_MODULE_1__["GETTERS_STUDENT"]];
    },
    users: function users() {
      return [];
    },
    pageUsers: function pageUsers() {
      return 0;
    },
    religions: function religions() {
      return this.$store.getters[_store_religion_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_RELIGIONS"]] ? this.$store.getters[_store_religion_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_RELIGIONS"]] : [];
    },
    pageReligions: function pageReligions() {
      return this.$store.getters[_store_religion_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_TOTAL_PAGE"]] ? this.$store.getters[_store_religion_types__WEBPACK_IMPORTED_MODULE_3__["GETTERS_TOTAL_PAGE"]] : 0;
    },
    countries: function countries() {
      return this.$store.getters[_store_country_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_COUNTRIES"]] ? this.$store.getters[_store_country_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_COUNTRIES"]] : [];
    },
    pageCountries: function pageCountries() {
      return this.$store.getters[_store_country_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_TOTAL_PAGE"]] ? this.$store.getters[_store_country_types__WEBPACK_IMPORTED_MODULE_4__["GETTERS_TOTAL_PAGE"]] : 0;
    }
  },
  methods: {
    updateNoMessage: function updateNoMessage() {
      console.log('update no message');
    },
    getStudent: function getStudent() {
      var _this = this;

      this.$store.dispatch(_store_student_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_GET_STUDENT_ID"], {
        id: this.pIdStudent
      }).then(function (respon) {
        _this.menu.isLoading = false;

        _this.fillForm();
      })["catch"](function (err) {
        _this.$store.dispatch(_store_notification_types__WEBPACK_IMPORTED_MODULE_2__["ACTIONS_MESSAGE"], {
          message: err,
          color: 'red'
        });
      });
    },
    fillForm: function fillForm() {
      var _this2 = this;

      Object.keys(this.forms).map(function (formGroups) {
        _this2.forms[formGroups].map(function (form) {
          if (form.type == 'textSearch') {// form.value = this.student[form.child].name ? this.student[form.child].name : ''
          } else {
            form.value = _this2.student[form.name];
          }
        });
      });
    },
    modalSearchOpen: function modalSearchOpen(searchingFor) {
      this.modalSearch.searchingFor = searchingFor;
      this.modalSearch.page.currentPage = 1;

      if (searchingFor == "user") {
        this.modalSearch.ui.title = "BELUM Pencarian Data Siswa";
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
        this.modalSearch.ui.search.valueDispatch = _store_student_types__WEBPACK_IMPORTED_MODULE_1__["ACTIONS_GET_STUDENT"];
      } else if (searchingFor == "religion") {
        this.modalSearch.ui.title = "Pencarian Data Agama";
        this.modalSearch.ui.search.lists = [{
          text: "Nama Agama",
          value: 'name'
        }];
        this.modalSearch.ui.search.valueList = 'name';
        this.modalSearch.ui.search.valueDispatch = _store_religion_types__WEBPACK_IMPORTED_MODULE_3__["ACTIONS_GET_RELIGION"];
        this.modalSearch.table.header = ['Nama Agama', 'Catatan'];
        this.modalSearch.table.body = ['name', 'internal_note'];
      } else if (searchingFor == 'country') {
        this.modalSearch.ui.title = "Pencarian Data Kewarganegraan";
        this.modalSearch.ui.search.lists = [{
          text: "Nama Negara",
          value: 'name'
        }, {
          text: "Kode Negara",
          value: 'num_code'
        }, {
          text: "Alpa 2 Kode",
          value: 'alpha_2_code'
        }, {
          text: "Alpa 3 Kode",
          value: 'alpha_3_code'
        }];
        this.modalSearch.ui.search.valueList = 'name';
        this.modalSearch.ui.search.valueDispatch = _store_country_types__WEBPACK_IMPORTED_MODULE_4__["ACTIONS_GET_COUNTRY"];
        this.modalSearch.table.header = ['Kode', 'Nama Negara', 'Kebangsaan', 'Catatan'];
        this.modalSearch.table.body = ['num_code', 'name', 'nationality', 'internal_note'];
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
      var _this3 = this;

      var searchingFor = this.modalSearch.searchingFor;
      Object.keys(this.forms).map(function (formGroups) {
        _this3.forms[formGroups].map(function (form) {
          if (form.type == 'textSearch') {
            if (form.searchingFor == searchingFor) {
              form.value = value.id;

              if (searchingFor == 'user') {
                form.textValue = "".concat(value.user_id);
              } else if (searchingFor == 'religion') {
                form.textValue = value.name;
              } else if (searchingFor == 'country') {
                form.textValue = value.name;
              }
            }
          }
        });
      });
      this.modalSearch.ui.search.valueSearch = '';
    }
  },
  watch: {
    pIdStudent: function pIdStudent(val) {
      this.getStudent();
    }
  },
  created: function created() {
    this.getStudent();
  },
  data: function data() {
    return {
      menu: {
        isLoading: true
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
      },
      steppers: [{
        step: 1,
        title: 'Akun',
        content: 'akun'
      }, {
        step: 2,
        title: 'Data Diri Siswa',
        content: 'dataDiriSiswa'
      }, {
        step: 3,
        title: 'Keterangan Tempat Tinggal',
        content: 'keteranganTempatTinggal'
      }, {
        step: 4,
        title: 'Keterangan Kesehatan',
        content: 'keteranganKesehatan'
      }, {
        step: 5,
        title: 'Keterangan Pendidikan',
        content: 'keteranganPendidikan'
      }, {
        step: 6,
        title: 'Keterangan Ayah Kandung',
        content: 'keteranganAyahKandung'
      }, {
        step: 7,
        title: 'Keterangan Ibu Kandung',
        content: 'keteranganIbuKandung'
      }, {
        step: 8,
        title: 'Keterangan Wali',
        content: 'keteranganWali'
      }, {
        step: 9,
        title: 'Kegemaran',
        content: 'kegemaran'
      }, {
        step: 10,
        title: 'Perkembangan Siswa',
        content: 'perkembanganSiswa'
      }, {
        step: 11,
        title: 'Informasi Setelah Selesai Pendidikan',
        content: 'informasiSetelahLulus'
      }],
      forms: {
        akun: [{
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
          name: 'user_id',
          label: 'User ID',
          searchingFor: 'user',
          child: '',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: []
        }, {
          isShow: true,
          type: 'textarea',
          name: 'internal_note',
          label: 'Catatan Siswa',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Catatan Siswa Harus Kurang dari 255 Karakter';
          }]
        }],
        dataDiriSiswa: [{
          isShow: true,
          type: 'text',
          name: 'nis',
          label: 'NIS',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter NIS Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'nisn',
          label: 'NISN',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter NISN Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fullname',
          label: 'Nama Lengkap',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nama Lengkap Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'nickname',
          label: 'Nama Panggilan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nama Panggilan Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'gender',
          label: 'Jenis Kelamin',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Jenis Kelamin Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'birthplace',
          label: 'Tempat Lahir',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tempat Lahir Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'birthdate',
          label: 'Tanggal Lahir',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lahir Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'stu_religion_id',
          label: 'Agama',
          searchingFor: 'religion',
          value: '',
          child: 'stu_religion',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Agama Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'stu_country_id',
          label: 'Negara',
          searchingFor: 'country',
          child: 'stu_country',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Negara Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'sau_kandung',
          label: 'Jumlah Saudara Kandung',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Jumlah Saudara Kandung Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'sau_tiri',
          label: 'Jumlah Saudara Tiri',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Jumlah Saudara Tiri Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'sau_angkat',
          label: 'Jumlah Saudara Angkat',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Jumlah Saudara Angkat Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'status_in_fam',
          label: 'Status Dalam Keluarga',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Status Dalam Keluarga Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'birth_order',
          label: 'Anak ke-',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Anak ke- Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'daily_lang',
          label: 'Bahasa Sehari-hari',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Bahasa Sehari-hari Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganTempatTinggal: [{
          isShow: true,
          type: 'text',
          name: 'stu_address',
          label: 'Alamat Siswa',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alamat Siswa Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'stu_phone',
          label: 'No Hp Siswa',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nomor Hp Siswa Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'live_with',
          label: 'Tinggal Bersama',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tinggal Bersama Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'sch_distance',
          label: 'Jarang Tempat Tinggal Ke Sekolah (Km)',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Jarang Tempat Tinggal Ke Sekolah Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganKesehatan: [{
          isShow: true,
          type: 'text',
          name: 'blood_type',
          label: 'Golongan Darah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Golongan Darah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'disease',
          label: 'Riwayat Penyakit',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Riwayat Penyakit Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'disability',
          label: 'Kelainan Jasmani',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Kelainan Jasmani Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'height',
          label: 'Tinggi Badan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tinggi Badan Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'weight',
          label: 'Berat Badan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Berat Badan Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganPendidikan: [{
          isShow: true,
          type: 'text',
          name: 'grad_from_sch',
          label: 'Sekolah Asal',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Sekolah Asal Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'pre_entry_date',
          label: 'Tanggal Masuk Sekolah Sebelumnya',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Masuk Sekolah Sebelumnya Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'pre_grad_date',
          label: 'Tanggal Lulus Pendidikan Sebelumnya',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lulus Pendidikan Sebelumnya Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'pre_sttb',
          label: 'STTB Pendidikan Sebelumnya',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter STTB Pendidikan Sebelumnya Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'study_period',
          label: 'Lama Belajar di Pendidikan Sebelumnya',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Lama Belajar di Pendidikan Sebelumnya Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'is_trf',
          label: 'Siswa Pindahan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Siswa Pindahan Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'trf_from',
          label: 'Pindahan Dari Sekolah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pindahan Dari Sekolah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'trf_reason',
          label: 'Alasan Pindah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alasan Pindah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'entry_date',
          label: 'Tanggal Diterima Masuk (Sekolah Saat Ini)',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Diterima Masuk (Sekolah Saat Ini) Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'entry_to',
          label: 'Diterima di : X Multimedia',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Diterima di : X Multimedia Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganAyahKandung: [{
          isShow: true,
          type: 'text',
          name: 'fat_name',
          label: 'Nama Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nama Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_birthplace',
          label: 'Tempat Lahir Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tempat Lahir Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'fat_birthdate',
          label: 'Tanggal Lahir Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lahir Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'is_step_fat',
          label: 'Ayah Tiri ?',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length >= 0 && value.length <= 255 || 'Karakter Ayah Tiri ? Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'fat_religion_id',
          label: 'Agama Ayah',
          searchingFor: 'religion',
          child: 'fat_religion',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Agama Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'fat_country_id',
          label: 'Kewarganegaraan Ayah',
          searchingFor: 'country',
          child: 'fat_country',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Kewarganegaraan Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_latest_edu',
          label: 'Pendidikan Terakhir Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pendidikan Terakhir Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_job',
          label: 'Pekerjaan Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pekerjaan Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_income',
          label: 'Penghasilan Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Penghasilan Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_address',
          label: 'Alamat Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alamat Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_phone',
          label: 'Telepon Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Telepon Ayah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'Ayah Masih Hidup ?',
          label: 'is_fat_alive',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Ayah Masih Hidup ? Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'fat_internal_note',
          label: 'Catatan Ayah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Catatan Ayah Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganIbuKandung: [{
          isShow: true,
          type: 'text',
          name: 'mot_name',
          label: 'Nama Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nama Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_birthplace',
          label: 'Tempat Lahir Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tempat Lahir Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'mot_birthdate',
          label: 'Tanggal Lahir Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lahir Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'is_step_mot',
          label: 'Ibu Tiri ?',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Ibu Tiri ? Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'mot_religion_id',
          label: 'Agama Ibu',
          searchingFor: 'religion',
          child: 'mot_religion',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Agama Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'mot_country_id',
          label: 'Kewarganegaraan Ibu',
          searchingFor: 'country',
          child: 'mot_country',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Kewarganegaraan Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_latest_edu',
          label: 'Pendidikan Terakhir Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pendidikan Terakhir Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_job',
          label: 'Pekerjaan Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pekerjaan Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_income',
          label: 'Penghasilan Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Penghasilan Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_address',
          label: 'Alamat Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alamat Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_phone',
          label: 'Telepon Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Telepon Ibu Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'is_mot_alive',
          label: 'Ibu Masih Hidup ?',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Ibu Masih Hidup ? Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'mot_internal_note',
          label: 'Catatan Ibu',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Catatan Ibu Harus Kurang dari 255 Karakter';
          }]
        }],
        keteranganWali: [{
          isShow: true,
          type: 'text',
          name: 'wali_name',
          label: 'Nama Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Nama Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_birthplace',
          label: 'Tempat Lahir Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tempat Lahir Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'wali_birthdate',
          label: 'Tanggal Lahir Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lahir Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'wali_religion_id',
          label: 'Agama Wali',
          searchingFor: 'religion',
          child: 'wali_religion',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Agama Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'textSearch',
          name: 'wali_country_id',
          label: 'Kewarganegaraan Wali',
          searchingFor: 'country',
          child: 'wali_country',
          value: '',
          textValue: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Kewarganegaraan Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_latest_edu',
          label: 'Pendidikan Terakhir Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pendidikan Terakhir Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_job',
          label: 'Pekerjaan Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Pekerjaan Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_income',
          label: 'Penghasilan Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Penghasilan Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_address',
          label: 'Alamat Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alamat Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_phone',
          label: 'Telepon Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Telepon Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'is_wali_alive',
          label: 'Wali Masih Hidup ?',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Wali Masih Hidup ? Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_internal_note',
          label: 'Catatan Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Catatan Wali Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'wali_relation',
          label: 'Hubungan Dengan Wali',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Hubungan Dengan Wali Harus Kurang dari 255 Karakter';
          }]
        }],
        kegemaran: [{
          isShow: true,
          type: 'text',
          name: 'interest_art',
          label: 'Minat Seni',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Minat Seni Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'interest_sport',
          label: 'Minat Olahraga',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Minat Olahraga Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'interest_social',
          label: 'Minat Kemasyarakatan',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Minat Kemasyarakatan Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'interest_other',
          label: 'Minat Lainya',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Minat Lainya Harus Kurang dari 255 Karakter';
          }]
        }],
        perkembanganSiswa: [{
          isShow: true,
          type: 'text',
          name: 'scholarship',
          label: 'Keterangan Beasiswa',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Keterangan Beasiswa Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'leave_date',
          label: 'Tanggal Meninggalkan Sekolah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Meninggalkan Sekolah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'leave_reason',
          label: 'Alasan Meninggalkan Sekolah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Alasan Meninggalkan Sekolah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'grad_date',
          label: 'Tanggal Lulus Sekolah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Lulus Sekolah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'sttb',
          label: 'No STTB',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter No STTB Harus Kurang dari 255 Karakter';
          }]
        }],
        informasiSetelahLulus: [{
          isShow: true,
          type: 'text',
          name: 'next_stu_step',
          label: 'Lanjutan Pasca Sekolah',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Lanjutan Pasca Sekolah Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'date',
          name: 'next_act_date',
          label: 'Tanggal',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Tanggal Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'instance',
          label: 'Instansi/Lembaga/Sekolah Tinggi',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Instansi/Lembaga/Sekolah Tinggi Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'stu_income',
          label: 'Penghasilan Siswa',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Penghasilan Siswa Harus Kurang dari 255 Karakter';
          }]
        }, {
          isShow: true,
          type: 'text',
          name: 'profile_pict',
          label: 'Foto Profil',
          value: '',
          maxlength: 255,
          rules: [function (value) {
            if (!value) {
              return true;
            }

            return value.length <= 255 || 'Karakter Foto Profil Harus Kurang dari 255 Karakter';
          }]
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6& ***!
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
    "v-card",
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-form",
                [
                  _c(
                    "v-row",
                    [
                      _vm._l(_vm.comFormsTextSearch, function(form, index) {
                        return [
                          index == 0 && _vm.isOddTextSearch
                            ? _c(
                                "v-col",
                                {
                                  key: "textSearch" + index,
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12",
                                    xl: "12"
                                  }
                                },
                                [
                                  form.type === "textSearch"
                                    ? _c("v-text-field", {
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          value: form.textValue,
                                          counter: form.maxlength,
                                          readonly: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.pActSearchModalOpen(
                                              form.searchingFor
                                            )
                                          }
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "append",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.pActSearchModalOpen(
                                                            form.searchingFor
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("mdi-magnify")]
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c(
                                "v-col",
                                {
                                  key: "textSearch" + index,
                                  attrs: {
                                    cols: "12",
                                    sm: "6",
                                    md: "6",
                                    lg: "6",
                                    xl: "6"
                                  }
                                },
                                [
                                  form.type === "textSearch"
                                    ? _c("v-text-field", {
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          value: form.textValue,
                                          counter: form.maxlength,
                                          readonly: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.pActSearchModalOpen(
                                              form.searchingFor
                                            )
                                          }
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "append",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.pActSearchModalOpen(
                                                            form.searchingFor
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("mdi-magnify")]
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                        ]
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.comFormsNonArea, function(form, index) {
                        return [
                          index == 0 && _vm.isOddNonArea
                            ? _c(
                                "v-col",
                                {
                                  key: "nonArea" + index,
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12",
                                    xl: "12"
                                  }
                                },
                                [
                                  form.type === "text"
                                    ? _c("v-text-field", {
                                        ref: "index" + index,
                                        refInFor: true,
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          counter: form.maxlength
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "select"
                                    ? _c("v-select", {
                                        ref: "index" + index,
                                        refInFor: true,
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          items: form.items,
                                          "item-text": "item",
                                          "item-value": "value"
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "number"
                                    ? _c("v-slider", {
                                        attrs: {
                                          color: "green",
                                          label: form.label,
                                          "thumb-label": "always"
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "date"
                                    ? _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            attrs: {
                                                              label: form.label,
                                                              "prepend-icon":
                                                                "mdi-calendar",
                                                              readonly: ""
                                                            },
                                                            model: {
                                                              value: form.value,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  form,
                                                                  "value",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "form.value"
                                                            }
                                                          },
                                                          "v-text-field",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      )
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: _vm.menuDate,
                                            callback: function($$v) {
                                              _vm.menuDate = $$v
                                            },
                                            expression: "menuDate"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.menuDate = false
                                              }
                                            },
                                            model: {
                                              value: form.value,
                                              callback: function($$v) {
                                                _vm.$set(form, "value", $$v)
                                              },
                                              expression: "form.value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c(
                                "v-col",
                                {
                                  key: "nonArea" + index,
                                  attrs: {
                                    cols: "12",
                                    sm: "6",
                                    md: "6",
                                    lg: "6",
                                    xl: "6"
                                  }
                                },
                                [
                                  form.type === "text"
                                    ? _c("v-text-field", {
                                        ref: "index" + index,
                                        refInFor: true,
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          counter: form.maxlength
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "select"
                                    ? _c("v-select", {
                                        ref: "index" + index,
                                        refInFor: true,
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          items: form.items,
                                          "item-text": "item",
                                          "item-value": "value"
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "number"
                                    ? _c("v-slider", {
                                        attrs: {
                                          color: "green",
                                          label: form.label,
                                          "thumb-label": "always"
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  form.type === "date"
                                    ? _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            attrs: {
                                                              label: form.label,
                                                              "prepend-icon":
                                                                "mdi-calendar",
                                                              readonly: ""
                                                            },
                                                            model: {
                                                              value: form.value,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  form,
                                                                  "value",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "form.value"
                                                            }
                                                          },
                                                          "v-text-field",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      )
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: _vm.menuDate,
                                            callback: function($$v) {
                                              _vm.menuDate = $$v
                                            },
                                            expression: "menuDate"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.menuDate = false
                                              }
                                            },
                                            model: {
                                              value: form.value,
                                              callback: function($$v) {
                                                _vm.$set(form, "value", $$v)
                                              },
                                              expression: "form.value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm._l(_vm.comFormsArea, function(form, index) {
                        return [
                          index == 0 && _vm.isOddArea
                            ? _c(
                                "v-col",
                                {
                                  key: "area" + index,
                                  attrs: {
                                    sm: "12",
                                    md: "12",
                                    lg: "12",
                                    xl: "12"
                                  }
                                },
                                [
                                  form.type === "textarea"
                                    ? _c("v-textarea", {
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          rows: "1",
                                          counter: form.maxlength
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c(
                                "v-col",
                                {
                                  key: "area" + index,
                                  attrs: { sm: "6", md: "6", lg: "6", xl: "6" }
                                },
                                [
                                  form.type === "textarea"
                                    ? _c("v-textarea", {
                                        attrs: {
                                          label: form.label,
                                          rules: form.rules,
                                          rows: "1",
                                          counter: form.maxlength
                                        },
                                        model: {
                                          value: form.value,
                                          callback: function($$v) {
                                            _vm.$set(form, "value", $$v)
                                          },
                                          expression: "form.value"
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                        ]
                      })
                    ],
                    2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-stepper",
        { attrs: { vertical: "" } },
        [
          _vm._l(_vm.steppers, function(stepper, index) {
            return [
              _c(
                "v-stepper-step",
                {
                  key: "step" + index,
                  attrs: { editable: "", step: stepper.step },
                  on: { click: _vm.updateNoMessage }
                },
                [_vm._v("\n        " + _vm._s(stepper.title) + "\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { key: "content" + index, attrs: { step: stepper.step } },
                [
                  _c("form-control", {
                    attrs: {
                      pForms: _vm.forms[stepper.content],
                      pActSearchModalOpen: _vm.modalSearchOpen
                    }
                  })
                ],
                1
              )
            ]
          })
        ],
        2
      ),
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
            _vm.modalSearch.searchingFor == "user"
              ? _vm.users
              : _vm.modalSearch.searchingFor == "religion"
              ? _vm.religions
              : _vm.countries,
          pPageSearchResult:
            _vm.modalSearch.searchingFor == "user"
              ? _vm.pageUsers
              : _vm.modalSearch.searchingFor == "religion"
              ? _vm.pageReligions
              : _vm.pageCountries,
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

/***/ "./resources/js/src/components/student/FormControl.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/student/FormControl.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl.vue?vue&type=template&id=2e9192d6& */ "./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6&");
/* harmony import */ var _FormControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControl.vue?vue&type=script&lang=js& */ "./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/student/FormControl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/FormControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormControl.vue?vue&type=template&id=2e9192d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/FormControl.vue?vue&type=template&id=2e9192d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormControl_vue_vue_type_template_id_2e9192d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/student/Student.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/student/Student.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Student.vue?vue&type=template&id=4ed6ddd7& */ "./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7&");
/* harmony import */ var _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Student.vue?vue&type=script&lang=js& */ "./resources/js/src/components/student/Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/student/Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/student/Student.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/student/Student.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Student.vue?vue&type=template&id=4ed6ddd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/student/Student.vue?vue&type=template&id=4ed6ddd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4ed6ddd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);