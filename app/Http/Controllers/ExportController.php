<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class ExportController extends Controller
{
    public function bukuInduk(Request $request) {

      // request yg diperlukan
      // nis / student_id
      // rombel_category_id

      $pdf = \PDF::loadView('examplepdf.example');
      return $pdf->stream('example.pdf');


      // if ($request->stream) {
      //   return $pdf->stream('example.pdf');
      // } else {
      //   return $pdf->download('example.pdf');
      // }
    }
}
