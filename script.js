            //untuk membuat semua tag input, select(dropdown) dan textarea jadi wajib untuk diisi
            //membuat variabel inputan yang dimana merupakan semua elemen input, select, dan textarea
            var inputan = document.querySelectorAll("input", "select", "textarea");

            //memberikan atribut required pada setiap inputan dengan for loop sederhana
            for(var i = 0; i < inputan.length; i++){
                inputan[i].required = true; //
            }

            //untuk memvalidasi date yang diinput (tidak boleh melebihi dari hari pepngisian form)
            //membuat variabel inputDate yang dimana merupakan element dengan Id birthdateIn
            var inputDate = document.getElementById("birthdateIn");

            //membuat objek date untuk mengambil tanggal hari ini
            var today = new Date(); 

            //menyimpan tanggal hari ini sebagai string dengan format ISO 8601 dan displit sehingga hanya mengambil format (YYYY-MM-DD) karena hanya dibutuhkan tanggalnya
            var todayString = today.toISOString().split("T")[0];
            
            //menentukan batas maksimal penginputan tanggal dengan .max
            inputDate.max = todayString;
            
            //aksi yang dilakukan setelah memencet tombol submit
            //dilakukan pengambilan Id registform, lalu mendeteksi tombol submit.
            document.getElementById("registform").addEventListener("submit", function(event){
                event.preventDefault(); //mencegah form dikirim secara default

                //mengambil data dari form
                var formData = new FormData(this);

                //membuat array untuk menyimpan isi data
                var formDataSerialized = {};

                //mengisi data ke dalam array yang dibuat tadi dengan name dari inputan sebagai key
                for (var [key, value] of formData.entries()){
                    formDataSerialized[key] = value;
                }
                console.log(formDataSerialized); //menuliskan objek yang berisi data form ke dalam console

                //membuat vaiabel styleFoto yang akan dipakai nantinya
                var styleFoto = `
                width: 30vw;
                height: auto;
                "`;

                //membuat objek FileReader yang berguna untuk membaca file dari sistem pengguna
                let reader = new FileReader();

                //mengambil file dari elemen input dengan tipe 'file', kemudian membaca file tersebut sebagai data URL
                reader.readAsDataURL(document.querySelector("input[type=file]").files[0]);

                //setelah pembacaan file selesai maka function ini akan dipanggil
                reader.onload = function(){
                    //menyimpan hasil pembacaan sebagai data URL ke dalam localStorage dengan kata kunci "image"
                    localStorage.setItem("image", reader.result);

                    //lalu mengambil data URL dengan kata kunci "image" dan disimpan ke dalam variabel srcFoto
                    var srcFoto = localStorage.getItem("image");

                    //membuat variabel photoElement yang berisi sintaks html yang berguna untuk menampilkan srcFoto dengan style yang diambil dari styleFoto
                    var photoElement = `<img src="${srcFoto}" style="${styleFoto}">`;

                    //membuat variabel output dengan menggunakan format tabel agar kelihatan rapi. Dalam variabel output ini berisi data-data yang sudah disimpan sebelumnya.
                    var output =
            `<br><hr><br>
            <h3 style="text-align: center;"><b>Output</b></h3>
            <table class ="table">
                <tr>
                    <td>
                        <b>Name</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['name']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Date of Birth</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['birthdate']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Gender</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['gender']}</b>

                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Email Address</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['email']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Home Address</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['address']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Phone Number</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['countryCode']}${formDataSerialized['phone']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Program of Interest</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['program']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Father's Name</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['father']}</b>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <b>Mother's Name</b>
                        </td>
                    <td>
                        <b>: ${formDataSerialized['mother']}</b>
                        </td>
                    </tr>
                <tr>
                    <td style="vertical-align: middle;">
                        <b>Photo</b>
                        </td>
                    <td>
                        <b>: ${photoElement}
                        </b> 
                    </td>
                </tr>
            </table>`;

            //menuliskan variabel output tadi ke dalam div yang memiliki element 'output'
            document.getElementById('output').innerHTML = output;
                };
            });
            
            //membuat function checkImage sebagai validasi untuk inputan file (hanya menerima gambar saja)
            //selanjutnya function ini akan ditulis sebagai atribut dari tag input dengan tipe file
            function checkImage(){

                //membuat variabel yang mengambil file yang diinput
                var inputImageType = document.querySelector("input[type=file]").files[0].type;

                //menentukan file dengan format apa yang valid
                const valids = ['image/jpeg', 'image/png'];

                //jika tidak valid maka akan memunculkan alert dan mengubah value dari input file tadi kembali kosong
                if(!valids.includes(inputImageType)){
                    alert("Please insert Image only");
                    document.querySelector("input[type=file]").value = "";
                }
            };