var app = new Vue({
  el: '#userProfile',
  data: {
    userName:'John Doe',
    userEmail:'jdoe@iu.edu',
  },
  created() {
      this.fetchUser();
    ),

    methods: {
      fetchUser: function() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userEmail = userData.email;
        }};
    }
  }
})
