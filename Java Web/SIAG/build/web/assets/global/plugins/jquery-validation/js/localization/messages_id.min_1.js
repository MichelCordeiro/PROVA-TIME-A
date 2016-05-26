/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"Kolom ini diperlukan.",remote:"Harap benarkan kolom ini.",email:"Silakan masukkan format email yang benar.",url:"Silakan masukkan format URL yang benar.",date:"Silakan masukkan format tanggal yang benar.",dateISO:"Silakan masukkan format tanggal(ISO) yang benar.",number:"Silakan masukkan angka yang benar.",digits:"Harap masukan angka saja.",creditcard:"Harap masukkan format kartu kredit yang benar.",equalTo:"Harap masukkan nilai yg sama dengan sebelumnya.",maxlength:a.validator.format("Input dibatasi hanya {0} karakter."),minlength:a.validator.format("Input tidak kurang dari {0} karakter."),rangelength:a.validator.format("Panjang karakter yg diizinkan antara {0} dan {1} karakter."),range:a.validator.format("Harap masukkan nilai antara {0} dan {1}."),max:a.validator.format("Harap masukkan nilai lebih kecil atau sama dengan {0}."),min:a.validator.format("Harap masukkan nilai lebih besar atau sama dengan {0}.")})});