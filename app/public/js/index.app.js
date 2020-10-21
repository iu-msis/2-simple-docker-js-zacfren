waitingApp = new Vue({
  el: '#commentsId',
  data:{
    comments: [{
      id: '',
      commentMessage: ''
    }],
      newComment: {
        id: '',
        commentText: '',
      }
  },
  methods:{
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
    submitComment(){
      this.newCommentForm.userID = (this.newCommentForm.fname.substring(0,1)+this.newPTForm.lname).toLowerCase();
      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.newUser),
        headers: {
          "Content-Type": "applications/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.CtList.push(json[0]);
        this.newCommentForm = this.newUserData();
      });
      console.log("Creating (POSTing)...I");
      console.log(this.newComment);
    },
    newComment() {
      return {
        id: '',
        commentText: '',
      }
    }
  },
  created(){
    this.fetchComment();
  }
});
