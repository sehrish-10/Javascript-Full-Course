// CALLBACK HELL
getUser(function(user){

    getPosts(user, function(posts){

        getComments(posts, function(comments){

            console.log(comments);

        });

    });

});