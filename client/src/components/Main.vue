<template>
  <div class="container-fluid">
    <div class='row'>
      <div class='col-md-2'>
        <h1>sidebar</h1>
      </div>

      <div class='col-md-10'>
        <div class="container">

          <!-- Button to Open the Modal -->
          <button type="button" class="new-btn btn btn-success btn-lg" data-toggle="modal" data-target="#newPost">
            CREATE A NEW POST
          </button>

          <!-- The Modal -->
          <div class="modal fade" id="newPost">
            <div class="modal-dialog modal-lg model-dialog-centered">
              <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Create a New Post</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                  Modal body..
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

          <div class="post-container">

            <div class="card">
              <div class="card-body">
                <div class="post-header">

                  <h4>Title</h4>
                  <h6>
                    <i>DATE AND TIME</i>
                  </h6>
                  <p class="post-body">BODY</p>

                </div>
                <button type="button" v-on:click="seen = !seen" class="show btn btn-outline-primary btn-pill btn-sm">show hide</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

</style>
