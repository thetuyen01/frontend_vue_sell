<template>
    <html lang="en">
    
    <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS v5.2.1 -->
    
    </head>
    
    <div class="row justify-content-center p-5">
        <div class="card col-6 ">
            <div class="card-header">
                <h3>Thông tin sinh viên</h3>
            </div>
            <div class="card-body text-start">
                Họ và tên: {{a}}
                <br>
                Ngày sinh: {{b}}
                <br>
                Phái: {{c}}
                <br>
                Điểm: {{d}}
            </div>
            <div class="card-footer text-muted">
                Footer
            </div>
        </div>
    </div>
    
    </html>
    
</template>

<script>
export default {
    name: 'LabB1',
  data() {
    return {
        a: 'Hello Vue!',
        b: '27/04/2004',
        c: 'Nam',
        d: '5.0',
        }
    },
}
</script>
